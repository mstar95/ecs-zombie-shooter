import assetsManifest from './assetsManifest'

export const assets = {}

export async function loadAssets () {
    const loaded = await Promise.all(assetsManifest.map(getAsset))
    loaded.forEach(asset => assets[asset.url] = asset)
}

function getAsset (url) {
    const image = new window.Image()
    return new Promise((resolve, reject) => {
        image.onload = () => resolve({
            url,
            image,
            width: image.naturalWidth / 2,
            height: image.naturalHeight / 2
        })
        image.onerror = () => reject(url)
        image.src = url
    })
}