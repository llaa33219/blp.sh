export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/privacy') {
      return env.ASSETS.fetch(new Request(new URL('/privacy.html', url.origin), request));
    }
    return env.ASSETS.fetch(request);
  },
};
