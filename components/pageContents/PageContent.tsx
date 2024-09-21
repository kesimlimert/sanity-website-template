import { BlockRenderer } from "../BlockRenderer";

type Props = {
  data: any;
};

export function PageContent({ data }: Props) {
  console.log(data);
  return (
    <>
      <BlockRenderer content={data.content} />
    </>
  );
}
