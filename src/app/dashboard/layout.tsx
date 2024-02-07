import Container from "@/components/base/Container";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
