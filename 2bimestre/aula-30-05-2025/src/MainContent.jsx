import Section from './Section.jsx' 
import './MainContent.css'

export default function MainContent(){
    return(
        <main className='conteudo'>
            <Section title="Sobre nós">
                <p>
                    Disciplina de Desenvolvimento Web 2.
                </p>
            </Section>
            <Section title="Contato">
                <p>
                    Você pode nos contatar pelo Email:
                    <a href="mailto:marjorygoncalves@alunos.utfpr.edu.br"></a>
                </p>
            </Section>
        </main>
    )
}