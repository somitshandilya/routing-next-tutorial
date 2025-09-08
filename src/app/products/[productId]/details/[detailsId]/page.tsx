export default function Details({ params }: { params: { productId: string,
 detailsId: string } }) {
    return (
        <div>
            <h1>Details for product {params.productId} and details {params.detailsId}</h1>
        </div>
    );
}