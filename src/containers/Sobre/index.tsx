import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quia
      repudiandae ut explicabo sequi et quisquam ex beatae itaque similique
      neque obcaecati nostrum, iste magnam maiores dignissimos corporis ratione
      hic!
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=guilhermeocm&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=guilhermeocm&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
