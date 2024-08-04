type Props = {
  title: string
}

const foo = 123

export default function Home({ title = 'React Avançado!' }: Props) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
