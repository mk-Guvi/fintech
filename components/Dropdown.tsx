import RoundBtn from '@/components/RoundBtn';
import * as DropdownMenu from 'zeego/dropdown-menu';

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <RoundBtn icon={'ellipsis-horizontal'} text={'More'} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        side="bottom"          // position dropdown content below the trigger
        align="center"         // align the content centrally
        sideOffset={8}         // offset the content by 8px
        alignOffset={0}        // no horizontal offset
        loop                   // loop through items when navigating via keyboard
        avoidCollisions        // ensure the content avoids screen edges
        collisionPadding={10}  // padding to prevent collisions with screen edges
      >
        <DropdownMenu.Item key="statement">
          <DropdownMenu.ItemTitle>Statement</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: 'list.bullet.rectangle.fill',
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>

        <DropdownMenu.Item key="converter">
          <DropdownMenu.ItemTitle>Converter</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: 'coloncurrencysign.arrow.circlepath',
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>

        <DropdownMenu.Item key="background">
          <DropdownMenu.ItemTitle>Background</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: 'photo.fill',
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>

        <DropdownMenu.Item key="account">
          <DropdownMenu.ItemTitle>Add new account</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: 'plus.rectangle.on.folder.fill',
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
export default Dropdown;
