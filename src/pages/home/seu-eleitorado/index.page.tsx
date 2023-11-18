import { Sidebar } from "@/components/Global/Sidebar";
import { Container, Content, Main } from "./styles";
import { useRouter } from "next/router";
import { HeaderComponent } from "@/components/home/Header";
import { useEffect } from "react";
import { DoughnutChart } from "@/components/home/Charts/DoughnutChart";

export default function SeuEleitorado() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/home/seu-eleitorado");
    }
  }, []);
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          {/* <h1>osdajsaddsadsadsadassdadassdadas</h1> */}
          <DoughnutChart />
        </Main>
      </Content>
    </Container>
  );
}
