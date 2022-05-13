import axios from 'axios';

class Youtube {
  // constructor(key) {
  //  this.youtube = axios.create ({
  //    baseURL: 'https://www.googleapis.com/youtube/v3',
  //    params: {key:key},
  //  });
  // }

  constructor(httpClient) {
   this.youtube = httpClient;
  }

  //httpClient르ㄹ index.js에 정의해주고 거기서 정의해준데로 아래에서 get을 이용해 사용한다.

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map(item => (
      {...item, id: item.id.videoId}
      ));
  }
}

export default Youtube;