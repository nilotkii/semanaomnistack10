import React, { useState, useEffect } from 'react';



function DevForm({onSubmit}) {

    //Estatos
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    //Executado sempre que uma informação for alterada ou uma unica vez - 2 parametros, qual função e quando
    useEffect(() => {
        //Pega a localização do usuário (solicitação/permição via navegador)
        navigator.geolocation.getCurrentPosition( //função executado via useEffect
            (position) => {
                //Pega latitude e longitude do retorno (position)
                const {latitude, longitude} = position.coords;
                
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err)
            },
            {
                timeout: 30000,
            }
        );
    }, []); //vetor vazio useEffect executa uma unica vez, quando com variavel ele executa quando o valor da variavel muda

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário Github</label>
                <input 
                    name="github_username" 
                    id="github_username" 
                    required 
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                />
            </div>
                
            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input 
                    name="techs" 
                    id="techs" 
                    required 
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />
            </div>
                
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input 
                        type="number" 
                        name="latitude" 
                        id="latitude" 
                        //Insere o valor da variavel dentro do Input
                        value={latitude}
                        required 
                        //Toda vez que há uma mudança no input, seta o valor no estado
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input 
                        type="number" 
                        name="longitude" 
                        id="longitude" 
                        //Insere o valor da variavel dentro do Input
                        value={longitude} 
                        required
                        //Toda vez que há uma mudança no input, seta o valor no estado
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm;