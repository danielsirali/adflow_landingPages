import Head from 'next/head';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Head>
        <title>About Us - AdFlow</title>
      </Head>
      {children}
    </section>
  );
}
