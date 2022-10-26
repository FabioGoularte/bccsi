import Card from '../../components/Cards';
import './style.css';

export default function Experiences() {
    return (
        <>
            <div className="container">
                <h2>Quais são os principios básicos da Teoria Geral dos Sistemas?</h2>
                <div className="line"></div>
                <div className="cards-experiences">
				<Card 
                        position="Expansionismo"
                        description={
						<p>
							• Todo fenômeno é parte de um fenômeno maior.<br></br>
							• Desempenho de um sistema depende de como ele se
							relaciona com o todo.<br></br>
							• Cada fenômeno é constituído por partes que
							pertencem ao todo.<br></br>
							• Transferência da visão voltada aos elementos para a
							visão voltada para o todo.
						</p>
						}
                    />
                    <Card 
                        position="Pensamento Sintético"
                        description={
							<p>
								• Cada fenômeno é parte de um sistema maior,
								explicado em termos do papel que desempenha nesse
								sistema maior.<br></br>
								• Os órgãos do organismo humano são explicados pelo
								papel que desempenham no organismo e não pelo
								comportamento de seus tecidos ou estruturas de uma
								organização.<br></br>
								• Maior interesse na integração de coisas, e não em sua
								separação.
							</p>
							}
                    />
					 <Card 
                        position="Teleologia"
                        description={
							<p>
								• Causa é uma condição necessária, mas nem sempre
								suficiente para que surja o efeito.<br></br>
								• Relação causa-efeito não é uma relação determinística ou
								mecanicista, mas probalística.<br></br>
								• Estudo do comportamento com finalidade de alcançar
								objetivos.<br></br>
								• O comportamento é explicado por aquilo que ele produz
								ou por aquilo que é seu propósito ou objetivo reproduzir.<br></br>
								• Lógica sistêmica: procura entender as inter-relações entre
								diversas variáveis a partir de uma visão de um campo
								dinâmico de forças que atuam entre si.<br></br>
								• Campo dinâmico de forças produz um emergente
								sistêmico: o todo é diferente de cada uma de suas partes.<br></br>
								• Sistema possui características próprias que podem não
								existir em cada uma de suas partes integrantes.<br></br>
								• Sistemas visualizados como entidades globais e funcionais
								em busca de objetivos e finalidades.
							</p>
							}
                    />
                </div>
            </div>
        </>
    );
}