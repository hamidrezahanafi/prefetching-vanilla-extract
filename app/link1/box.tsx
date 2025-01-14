import { assignInlineVars } from '@vanilla-extract/dynamic';
import { sprinkles, Sprinkles, varDisplay } from './rainbow-sprinkles.css';

interface BoxProps extends Sprinkles {
  children?: React.ReactNode;
}

export const Box = ({ children }: BoxProps) => {
  const display: Sprinkles["display"] = varDisplay;

  return (
    <div className={sprinkles({
        display: display,
    })} style={{
        ...JSON.parse(JSON.stringify(assignInlineVars(
            {
                [varDisplay]: "flex",
            }
        ))),
    }}>
      {children}
    </div>
  );
};