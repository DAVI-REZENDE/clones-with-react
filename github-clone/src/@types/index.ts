export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  blog?: string;
  company?: string;
  email?: string;
  location: string;
}

export interface APIRepos {
  name: string;
  full_name: string;
  owner: {
    login: string;
  };
  starsgrazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}