import Head from 'next/head';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Head>
        <title>Contact Us - AdFlow</title>
      </Head>
      {children}
    </section>
  );
}
