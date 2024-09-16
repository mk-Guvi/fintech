import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Currency } from "@/interfaces/crypto";
import { Link } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import Loader from "@/components/Loader";

const ITEMS_PER_PAGE = 20;

const fetchCurrencies = async ({ pageParam = 1 }): Promise<any> => {
  const response = await fetch(
    `/api/listings?page=${pageParam}&limit=${ITEMS_PER_PAGE}`
  );
  return response.json();
};

const CryptoPage = () => {
  const headerHeight = useHeaderHeight();

  const {
    data: currenciesData,
    fetchNextPage,
    hasNextPage,
    isLoading: isLoadingCurrencies,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["listings"],
    queryFn: fetchCurrencies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const flatListData = currenciesData?.pages.flatMap((page) => page) || [];

  const ids = flatListData
    .map((currency: Currency) => `${currency.id}`)
    .join(",");

  const { data: infoData, isLoading: isLoadingInfo } = useQuery({
    queryKey: ["info", ids],
    queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });

  const renderItem = ({ item: currency }: { item: Currency }) => {
    const currencyInfo = infoData?.[currency.id] || {};

    return (
      <Link href={`/crypto/${currency.id}`} asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Image
            source={{ uri: currencyInfo?.logo }}
            style={{ width: 40, height: 40 }}
          />
          <View style={{ flex: 1, gap: 6 }}>
            <Text style={{ fontWeight: "600", color: Colors.dark }}>
              {currency.name}
            </Text>
            <Text style={{ color: Colors.gray }}>{currency.symbol}</Text>
          </View>
          <View style={{ gap: 6, alignItems: "flex-end" }}>
            <Text>{currency.quote.EUR.price.toFixed(2)} €</Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Ionicons
                name={
                  currency.quote.EUR.percent_change_1h > 0
                    ? "caret-up"
                    : "caret-down"
                }
                size={16}
                color={
                  currency.quote.EUR.percent_change_1h > 0 ? "green" : "red"
                }
              />
              <Text
                style={{
                  color:
                    currency.quote.EUR.percent_change_1h > 0 ? "green" : "red",
                }}
              >
                {currency.quote.EUR.percent_change_1h.toFixed(2)} %
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View
      style={{
        backgroundColor: Colors.background,
        paddingVertical: headerHeight,
        flex: 1,
      }}
    >
      <Text style={defaultStyles.sectionHeader}>Latest Crypto</Text>
      
      <Loader isLoading={isLoadingCurrencies || isLoadingInfo} />
      
      <FlatList
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          isFetchingNextPage ? <Loader isLoading /> : null
        }
        contentContainerStyle={defaultStyles.block}
      />
    </View>
  );
};

export default CryptoPage;
