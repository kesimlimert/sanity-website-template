import { BlockRenderer } from "../BlockRenderer";

type Props = {
  data: any;
};

export function PageContent({ data }: Props) {
  return (
    <>
      <BlockRenderer content={data.content} />
    </>
  );
}
