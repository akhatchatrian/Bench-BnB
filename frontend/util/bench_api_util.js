export const BenchUtil = {

    fetchBenches: () => (
        $.ajax({
            method: "GET",
            url: `api/benches`,
            error: error => console.log(error)
        })
    )
        
}