import { Helmet } from 'react-helmet-async';

export default function GoogleAnalytics() {
  const id = import.meta.env.VITE_GA_ID;
  if (!id) return null;
  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`}></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${id}');
      `}</script>
    </Helmet>
  );
}