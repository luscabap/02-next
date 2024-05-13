import NextLink from 'next/link';
import { Box, Text } from '@skynexui/components';
import { useRouter } from 'next/router';

// dicas dos paths estáticos
export async function getStaticPaths() {
    const dadosDaApi = await fetch("https://fakeapi-omariosouto.vercel.app/api/posts")
    .then(res => res.json());
    const paths = dadosDaApi.posts.map(post => {
        return { params: { id: `${post.id}` } }
    })

    return {
      paths: [],
      fallback: 'blocking'
    };
}

export async function getStaticProps(context) {
    const id = context.params.id
    const dadosDaApi = await fetch(`https://fakeapi-omariosouto.vercel.app/api/posts/${id}`).then(res => res.json());
    const post = dadosDaApi;

    return {
        props: {
            id: post.id,
            title: `Post: [${post.title}]`,
            date: `${post.date}`,
            content: `${post.content}`      
        },
        revalidate: 10,
    }
}

export default function PostsApiScreen(props) {
  const router = useRouter();
  const post = {
    title: props.title,
    date: props.date,
    content: props.content,
  }

  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '700px',
        paddingHorizontal: '16px',
      }}
    >
      {/* Cabeçalho */}
      <Text
        variant="heading2"
        tag="h1"
        styleSheet={{ color: '#F9703E', justifyContent: 'center', lineHeight: '1.2' }}
      >
        {post.title}
      </Text>
      <Text styleSheet={{ color: '#F9703E', justifyContent: 'center', borderBottom: '1px solid #F9703E', paddingVertical: '16px', marginVertical: '16px' }}>
        {post.date}
      </Text>

      {/* Área de Conteudo */}
      <Box
        styleSheet={{
          flexDirection: 'column',
        }}
      >
        <Text>
          {post.content}
        </Text>
      </Box>


      {/* Rodapé */}
      <Box
        styleSheet={{
          marginTop: '16px',
          paddingVertical: '16px',
          borderTop: '1px solid #F9703E',
          color: '#F9703E',
        }}
      >
        <NextLink href="/" passHref>
          <Text tag="a" styleSheet={{ hover: { textDecoration: 'underline' } }}>
            Voltar para a home
          </Text>
        </NextLink>
      </Box>
    </Box>
  )
}
