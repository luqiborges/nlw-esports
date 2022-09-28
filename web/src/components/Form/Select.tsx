import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import { SelectProps } from '@radix-ui/react-select';
import { Game } from '../../App';

interface SelectGameProps extends SelectProps{
  gameList: Game[];
}

export function Select({gameList, ...rest}: SelectGameProps){
  return (
    <SelectPrimitive.Root defaultValue={gameList[0].id} {...rest}>
      <SelectPrimitive.Trigger className="flex justify-between w-full h-11 items-center content-center bg-zinc-900 py-3 px-4 rounded text-sm text-white focus:border-white focus:border">
        <SelectPrimitive.Value className="text-sm" placeholder="Selecione o game que deseja jogar"/>
        <SelectPrimitive.Icon className="text-zinc-400">
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal className="shadow-lg shadow-black/25">
        <SelectPrimitive.Content className="hidden bg-zinc-900 rounded relative w-full">
          <SelectPrimitive.ScrollUpButton>
            <ChevronUpIcon />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="py-3 px-4 flex flex-col gap-4">
            {gameList.map( game => (
              <SelectPrimitive.Item key={game.id} className="text-sm text-zinc-500 flex rounded items-center h-4 relative gap-1 focus:text-zinc-300" value={game.id}>
                <SelectPrimitive.ItemText>{game.title}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator>
                  <CheckIcon />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>

            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton>
            <ChevronDownIcon />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}