import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { SimpleTooltip } from '../tooltips/SimpleTooltip';
import classed from '../../lib/classed';
import styles from './Card.module.css';

export enum RaisedLabelType {
  Hot = 'Hot',
  Pinned = 'Pinned',
  Beta = 'Beta',
}

const typeToClassName: Record<RaisedLabelType, string> = {
  [RaisedLabelType.Hot]: 'bg-theme-status-error',
  [RaisedLabelType.Pinned]: 'bg-theme-bg-bun',
  [RaisedLabelType.Beta]: 'bg-cabbage-40',
};

export interface RaisedLabelProps {
  listMode?: boolean;
  type: RaisedLabelType;
  description?: string;
  className?: string | undefined;
}

export const RaisedLabelContainer = classed(
  'div',
  `relative`,
  styles.cardContainer,
);

export function RaisedLabel({
  listMode,
  type = RaisedLabelType.Hot,
  description,
  className,
}: RaisedLabelProps): ReactElement {
  return (
    <div
      className={classNames(
        'absolute flex items-start',
        listMode ? 'top-0 right-full mt-5' : 'left-0 bottom-full ml-5 h-5',
        className,
      )}
    >
      <SimpleTooltip content={description}>
        <div
          className={classNames(
            'flex items-center px-1',
            styles.flag,
            typeToClassName[type],
            listMode
              ? 'h-5 w-full justify-center mouse:translate-x-9 rounded-l'
              : 'h-full flex-col mouse:translate-y-4 rounded-t',
          )}
        >
          <span className="font-bold text-white uppercase typo-caption2">
            {type}
          </span>
        </div>
      </SimpleTooltip>
      {!listMode && description && (
        <span className="mouse:hidden ml-2 typo-footnote text-theme-label-tertiary">
          {description}
        </span>
      )}
    </div>
  );
}
