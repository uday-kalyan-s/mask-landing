import Image from "next/image"

const AmvCarousel = ({data}) => (
    <Image
        src={data.url}
        width={1000}
        height={600}
        alt="amv carousel"
    />
)

export default AmvCarousel