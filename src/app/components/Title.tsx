export const enum TitleType {
  페이지_제목 = "ScreenTitle",
  섹션_제목 = "SectionTitle",
}

type Props = {
  type: TitleType;
  children: string;
};

export default function Title(props: Props) {
  const { type, children } = props;

  switch (type) {
    case TitleType.페이지_제목:
      return <h1 className="text-6xl font-semibold">{children}</h1>;
    case TitleType.섹션_제목:
      return <h2 className="text-4xl font-bold">{children}</h2>;
    default: {
      const _: never = type;
    }
  }
}
