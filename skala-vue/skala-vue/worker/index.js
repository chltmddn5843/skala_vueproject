export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname !== '/api/weather') {
      return new Response('Not found', { status: 404 })
    }

    const city = url.searchParams.get('city')?.trim()
    if (!city || city.length > 80) {
      return Response.json({ message: '올바른 도시 이름을 입력해 주세요.' }, { status: 400 })
    }

    const endpoint = new URL('https://api.openweathermap.org/data/2.5/weather')
    endpoint.search = new URLSearchParams({
      q: city,
      appid: env.VITE_OPENWEATHER_API_KEY,
      units: 'metric',
      lang: 'kr',
    })

    const response = await fetch(endpoint)
    return new Response(response.body, {
      status: response.status,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    })
  },
}
