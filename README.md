# Streaming Plats API (Work In Progress)

Streaming Plats API is an npm package designed to simplify the process of accessing data from various music streaming platforms. With this package, developers can seamlessly integrate functionality to gather information from multiple streaming services into their applications.

## Features

Unified Interface: Streaming Plats API provides a consistent interface to interact with multiple music streaming platforms, streamlining development efforts.

Multiple Platforms Supported: This package supports integration with popular music streaming platforms, including but not limited to Spotify, Apple Music, Deezer, and more.

Retrieve Various Data: Developers can access a wide range of data including track information, artist details, album metadata, playlists, and more, across different streaming platforms.

## Installation

To install Streaming Plats API, simply run the following command in your project:

```
npm install streaming-plats-api
```

## Usage

```
import { Spotify } from 'streaming-plats-api';

...
const result = await Spotify.search('Martin Garrix')
console.log(result)
...
```

## License

Streaming Plats API is licensed under the ISC License. Feel free to use and modify it according to your needs.

## Disclaimer

This package is not affiliated with or endorsed by any of the supported streaming platforms. It relies on publicly available APIs and may be subject to changes or limitations imposed by those platforms. Please ensure compliance with the terms of service of each platform when using this package in your applications.
