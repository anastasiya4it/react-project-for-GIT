export const useFetching = (collback) => {
    const [isPostLoading, setIsPostLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsPostLoading(true);
            await collback();
        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setIsPostLoading(false);
        }
    }
    return [fetching, isPostLoading, error];
}
export default useFetching;