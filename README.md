# react-native-next-carousel

![react-native-next-carousel default layout](https://i.ibb.co/QXNkQwr/Screen-Recording-2024-09-16-at-3-31-25-PM-1.gif) ![react-native-next-carousel layout with overlay text](https://i.ibb.co/WG5HcTM/Screen-Recording-2024-09-16-at-3-32-08-PM.gif)

## Installation

```bash
npm install react-native-next-carousel
```

## Or

```bash
npm install lottie-react-native
```

## Check example
Github example [github](https://github.com/AndrewHamal/react-native-next-carousel/tree/main/example)

## Usage

```js
import Carousel from "react-native-next-carousel";

const imageUrls = [
  { title: 'First Slide', img: 'https://plus.unsplash.com/premium_photo-1664546293816-191e0566f19e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Second Slide', img: 'https://plus.unsplash.com/premium_photo-1683134105531-42032fc66937?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Third Slide', img: 'https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
]

<Carousel
  data={imageUrls}
  rounded={30}
  imageGap={20}
  imageObj={'img'}
  imageOffset={100}
  paddingHorizontal={20}
/>
```


# Props

| Property             |  Type     | Default | Description                                  |
| -------------------- | :-----:   | :-----: | -------------------------------------------- |
| data                 | array     |  `null` | set the image source or data object          |
| height               | number    |  400     | set image height                            |
| imageGap             | number    |  20     | set image gap between                        |
| imageObj             | number    |  `null` | set if image is inside array object          |
| imageOffset          | number    |  30     | set image border radius                      |
| paddingHorizontal    | HexColor  |  20     | set/override shadow background color         |
| overlayContainer     | component | `null`  | add text overlay on image                    |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

## Contact
[linkedin](https://www.linkedin.com/in/anis-hamal-72ba8527a)

[portfolio website](https://anis-hamal.netlify.app/)
