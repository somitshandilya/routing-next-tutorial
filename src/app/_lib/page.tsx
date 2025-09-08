export default function PrivateRoute({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>Private Route</h1>
            <p>Protected content</p>
        </div>
    );
}