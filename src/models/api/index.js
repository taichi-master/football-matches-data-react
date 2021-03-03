export async function getFootballCompetitions ( year ) {
    const res = await fetch(`https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`)
    const data = await res.json()
    console.log(data)
    return data
}