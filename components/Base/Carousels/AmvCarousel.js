import Image from "next/image"

function AmvCarousel({data}){
    return (
    <Image
        src={data.url}
        width={1000}
        height={600}
        alt="amv carousel"
    />
)}

export default AmvCarousel