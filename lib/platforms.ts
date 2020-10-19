import { PlatformObject } from './interfaces';

export const platforms: Record<string, PlatformObject> = {
  twitch: {
    key: 'twitch',
    name: 'Twitch',
    url: 'twitch.tv',
    hex: '#6441a5',
    wideThumb: true,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?twitch\.tv\//,
    contentTypeMatches: {
      clip: /(?:http(?:s)?:\/\/(?:www\.)?clips\.twitch\.tv\/([a-zA-Z0-9_]+))|(?:http(?:s)?:\/\/(?:www\.)?twitch\.tv\/[a-zA-Z0-9_]+\/clip\/([a-zA-Z0-9_]+))/,
      vod: /http(?:s)?:\/\/(?:www\.)?twitch\.tv\/videos\/([a-zA-Z0-9_]+)/,
      stream: /http(?:s)?:\/\/(?:www\.)?twitch\.tv\/([a-zA-Z0-9_]+)/,
    },
  },

  youtube: {
    key: 'youtube',
    name: 'YouTube',
    url: 'youtube.com',
    hex: '#FF0000',
    wideThumb: true,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?youtube\.com\//,
    contentTypeMatches: {
      channel: /(?:https|http)\:\/\/(?:[\w]+\.)?youtube\.com\/(?:c\/|channel\/|user\/)([a-zA-Z0-9\-_]+)/,
      video: /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)[\w\=]*)?/,
    },
  },

  spotify: {
    key: 'spotify',
    name: 'Spotify',
    url: 'spotify.com',
    hex: '#1ED760',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:open\.)?spotify\.com\//,
    contentTypeMatches: {
      artist: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/artist\/([a-zA-Z0-9]+)/,
      song: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/track\/([a-zA-Z0-9]+)/,
      album: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/album\/([a-zA-Z0-9]+)/,
      playlist: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/playlist\/([a-zA-Z0-9]+)/,
      podcast: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/show\/([a-zA-Z0-9]+)/,
      podcastEpisode: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/episode\/([a-zA-Z0-9]+)/,
      profile: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/user\/([a-zA-Z0-9]+)/,
    },
  },

  instagram: {
    key: 'instagram',
    name: 'Instagram',
    url: 'instagram.com',
    hex: '#E4405F',
    wideThumb: true,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?instagram\.com\//,
    contentTypeMatches: {
      image: /http(?:s)?:\/\/(?:www\.)?instagram\.com\/p\/([a-zA-Z0-9]+)/,
      profile: /http(?:s)?:\/\/(?:www\.)?instagram\.com\/(?!p\/)(?!stories\/)([a-zA-Z0-9]+)/,
      story: /http(?:s)?:\/\/(?:www\.)?instagram\.com\/stories\/([a-zA-Z0-9]+)/,
    },
  },

  github: {
    key: 'github',
    name: 'Github',
    url: 'github.com',
    hex: '#181717',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?github\.com\//,
    contentTypeMatches: {
      repo: /http(?:s)?:\/\/(?:www\.)?github\.com\/[A-z0-9_-]+\/([A-z0-9_-]+)\/?/,
      profile: /http(?:s)?:\/\/(?:www\.)?github\.com\/([A-z0-9_-]+)/,
    },
  },

  snapchat: {
    key: 'snapchat',
    name: 'Snapchat',
    url: 'snapchat.com',
    hex: '#FFFC00',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?snapchat\.com\//,
    contentTypeMatches: {
      profile: /http(?:s)?:\/\/(?:www\.)?snapchat\.com\/add\/([A-z0-9\.\_\-]+)/,
    },
  },

  discord: {
    key: 'discord',
    name: 'Discord',
    url: 'discordapp.com',
    hex: '#7289da',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?(discordapp\.com|discord\.com|discord\.gg)\//,
    contentTypeMatches: {
      invite: /http(?:s)?:\/\/(?:www\.)?(?:discord\.gg|discordapp\.com\/invite|discord\.com\/invite)\/([a-zA-Z0-9_-]+)/,
    },
  },

  dlive: {
    key: 'dlive',
    name: 'DLive',
    url: 'dlive.com',
    hex: '#ffd300',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?dlive\.tv\//,
    contentTypeMatches: {
      channel: /http(?:s)?:\/\/dlive\.tv\/([a-zA-Z0-9_-]+)/,
    },
  },

  patreon: {
    key: 'patreon',
    name: 'Patreon',
    url: 'patreon.com',
    hex: '#f96854',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?patreon\.com\//,
    contentTypeMatches: {
      channel: /http(?:s)?:\/\/(?:www\.)?patreon\.com\/([^posts\/][a-zA-Z0-9-_]+)/,
      post: /http(?:s)?:\/\/(?:www\.)?patreon\.com\/posts\/([0-9]+)/,
    },
  },

  soundcloud: {
    key: 'soundcloud',
    name: 'SoundCloud',
    url: 'soundcloud.com',
    hex: '#ff8800',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?soundcloud\.com\//,
    contentTypeMatches: {
      song: /http(?:s)?:\/\/(?:www\.)?soundcloud\.com\/[a-zA-Z0-9-_]+\/([^sets][a-zA-Z0-9-_]+)/,
      album: /http(?:s)?:\/\/(?:www\.)?soundcloud\.com\/[a-zA-Z0-9-_]+\/sets\/([a-zA-Z0-9-_]+)/,
      artist: /http(?:s)?:\/\/(?:www\.)?soundcloud\.com\/([a-zA-Z0-9-_]+)/,
    },
  },

  tiktok: {
    key: 'tiktok',
    name: 'TikTok',
    url: 'tiktok.com',
    hex: '#40A4C4',
    wideThumb: true,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?tiktok\.com\//,
    contentTypeMatches: {
      post: /http(?:s)?:\/\/(?:www\.)?tiktok\.com\/@[a-zA-Z0-9-_]+\/video\/([0-9]+)/,
      channel: /http(?:s)?:\/\/(?:www\.)?tiktok\.com\/(@[a-zA-Z0-9_-]+)/,
    },
  },

  twitter: {
    key: 'twitter',
    name: 'Twitter',
    url: 'twitter.com',
    hex: '#00aced',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?twitter\.com\//,
    contentTypeMatches: {
      post: /http(?:s)?:\/\/(?:www\.)?twitter\.com\/[a-zA-Z0-9-_]+\/status\/([0-9]+)/,
      profile: /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9-_]+)/,
    },
  },

  'discord-bio': {
    key: 'discord.bio',
    name: 'discord.bio',
    url: 'discord.bio',
    wideThumb: true,
    hex: '#16151D',
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?discord\.bio\//,
    contentTypeMatches: {
      profile: /http(?:s)?:\/\/(?:www\.)?discord\.bio\/p\/([a-zA-Z0-9-_]+)/g,
      shortlink: /http(?:s)?:\/\/(?:www\.)?dsc\.bio\/([a-zA-Z0-9-_]+)/g,
    },
  },
} as const;
