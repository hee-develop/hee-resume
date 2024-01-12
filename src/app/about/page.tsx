import Image from "next/image";
import Title, { TitleType } from "../components/Title";
import Logo from "../components/Logo";

type CareerItemProps = {
  companyName: string;
  logoSrc: string;
  logoSize: number;
};
function CareerItem(props: CareerItemProps) {
  const { companyName, logoSrc, logoSize } = props;
  const alt = `${companyName} 로고`;

  return (
    <div>
      <div className="flex gap-2 items-center">
        <Logo src={logoSrc} alt={alt} size={logoSize} />
        <span className="text-2xl">{companyName}</span>
      </div>

      <p className="relative my-1" style={{ marginLeft: 48 }}>
        <Line style={{ top: 0, left: "-24px", background: "black" }} />
        가나다라마바사 아자차카타파하 가나다라마바사 아자차카타파하
        가나다라마바사 아자차카타파하
        <br />
        <Line style={{ left: "24px" }} />
        fsdadsafdsa
        <Line style={{ left: "24px" }} />
      </p>
    </div>
  );
}

function Line(props: { style?: React.CSSProperties }) {
  return (
    <div
      className="absolute w-1 h-full"
      style={{ content: "''", ...props.style }}
    />
  );
}

export default function About() {
  return (
    <main>
      <Title type={TitleType.페이지_제목}>about:</Title>
      <p>2020년 개발일을~</p>

      <section>
        <Title type={TitleType.섹션_제목}>ㄱ</Title>

        <CareerItem
          companyName="숨고"
          logoSrc="/logo_soomgo.png"
          logoSize={48}
        />
      </section>
    </main>
  );
}
