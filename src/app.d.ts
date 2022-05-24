interface APIError extends APIResponse {
  error_code: number;
  error: string;
}

interface APIResponse {
  ok: boolean;
}

interface ShortLink {
  id: number;
  inputLink: string;
  shortLink: string;
}

interface ShortLinkJSON extends APIResponse {
  result: {
    code: string;
    full_share_link: string;
    full_short_link: string;
    full_short_link2: string;
    full_short_link3: string;
    original_link: string;
    share_link: string;
    short_link: string;
    short_link2: string;
    short_link3: string;
  };
}
