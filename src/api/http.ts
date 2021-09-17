interface IHttp {
  subscribe(data: { name: string; email: string }): Promise<void>;
}

const SUBSCRIBE_URL = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

export const http: IHttp = {
  subscribe(data: { name: string; email: string }): Promise<void> {
    return fetch(SUBSCRIBE_URL, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(async response => {
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.errorMessage ?? 'Unknown error');
      }
      return data;
    });
  },
};
