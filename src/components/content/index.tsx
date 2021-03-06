import * as React from 'react';

interface IContentProps extends React.Props<any> {
  isVisible: boolean;
  style?: Object;
};

export default function Content({ children = null, isVisible }: IContentProps) {
  return (
    <main>
      { isVisible ? children : null }
    </main>
  );
}
