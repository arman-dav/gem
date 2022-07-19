export interface IBlogState {
  data: BlogState | [];
  loading: boolean;
}

export type BlogState = {
  access: boolean;
  authors: authorsType[];
  canonical_url: null;
  codeinjection_foot: null;
  codeinjection_head: null;
  comment_id: string;
  created_at: string;
  custom_excerpt: null;
  custom_template: null;
  email_recipient_filter: string;
  email_subject: null;
  excerpt: string;
  feature_image: string;
  featured: boolean;
  frontmatter: null;
  html: string;
  id: string;
  meta_description: null;
  meta_title: null;
  og_description: null;
  og_image: null;
  og_title: null;
  primary_author: primary_authorType;

  primary_tag: primary_tagType;

  published_at: string;
  reading_time: number;
  send_email_when_published: boolean;
  slug: string;
  tags: tagsType[];

  title: string;
  twitter_description: null;
  twitter_image: null;
  twitter_title: null;
  updated_at: string;
  url: string;
  uuid: string;
  visibility: string;
};

export type authorsType = {
  bio: string | null;
  cover_image: string | null;
  facebook: string | null;
  id: string;
  location: string | null;
  meta_description: string | null;
  meta_title: string | null;
  name: string;
  profile_image: string | null;
  slug: string;
  twitter: null;
  url: string;
  website: null;
};
export type primary_authorType = {
  bio: null;
  cover_image: null;
  facebook: null;
  id: string;
  location: null;
  meta_description: null;
  meta_title: null;
  name: string;
  profile_image: null;
  slug: string;
  twitter: null;
  url: string;
  website: null;
};
export type primary_tagType = {
  accent_color: null;
  canonical_url: null;
  codeinjection_foot: null;
  codeinjection_head: null;
  description: string;
  feature_image: null;
  id: string;
  meta_description: null;
  meta_title: null;
  name: string;
  og_description: null;
  og_image: null;
  og_title: null;
  slug: string;
  twitter_description: null;
  twitter_image: null;
  twitter_title: null;
  url: string;
  visibility: string;
};

export type tagsType = {
  accent_color: null;
  canonical_url: null;
  codeinjection_foot: null;
  codeinjection_head: null;
  description: string;
  feature_image: null;
  id: string;
  meta_description: null;
  meta_title: null;
  name: string;
  og_description: null;
  og_image: null;
  og_title: null;
  slug: string;
  twitter_description: null;
  twitter_image: null;
  twitter_title: null;
  url: string;
  visibility: string;
};
