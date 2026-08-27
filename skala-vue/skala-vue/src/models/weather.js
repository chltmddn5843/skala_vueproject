export const recommendActivity = ({ condition = '', status = '', temp, cloudiness }) => {
  if (['Rain', 'Drizzle', 'Thunderstorm'].includes(condition) || status.includes('비')) {
    return '비가 내려요. 전시 관람이나 카페처럼 실내 활동을 추천해요.'
  }
  if (condition === 'Snow' || status.includes('눈')) {
    return '눈길을 조심하고 따뜻한 실내 활동을 즐겨보세요.'
  }
  if (temp >= 30) {
    return '더운 날씨예요. 그늘이 있는 공원이나 실내 수영장을 추천해요.'
  }
  if (cloudiness <= 30 && temp >= 15) {
    return '날씨가 좋아요. 산책, 자전거 또는 피크닉을 즐겨보세요.'
  }
  if (cloudiness <= 70) {
    return '가벼운 구름이 있어요. 가까운 곳으로 산책하기 좋아요.'
  }
  return '구름이 많은 날이에요. 편안한 실내 문화 활동을 추천해요.'
}

export const toWeatherModel = (data) => {
  const weather = {
    id: data.id,
    name: data.name,
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    status: data.weather[0].description,
    condition: data.weather[0].main,
    moisture: data.main.humidity,
    cloudiness: data.clouds.all,
    wind: data.wind.speed,
  }
  return { ...weather, recommendation: recommendActivity(weather) }
}
