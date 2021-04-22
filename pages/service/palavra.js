import teste from "../teste"


export async function getServerSideProps() {
 a <teste      

    const palavra = await apibiblia.post("verses/search", {search: a, version: "nvi"})
    const data = await palavra.data.verses
    console.log(data)
        return { props:{ data  } }
        
    }
    