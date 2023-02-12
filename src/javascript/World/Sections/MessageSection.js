import * as THREE from 'three'

export default class CrossroadsSection
{
    constructor(_options)
    {
        // Options
        this.time = _options.time
        this.resources = _options.resources
        this.objects = _options.objects
        this.areas = _options.areas
        this.tiles = _options.tiles
        this.debug = _options.debug
        this.x = _options.x
        this.y = _options.y

        // Set up
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false

        //this.setStatic()
        this.setTitles()
    }

    setStatic()
    {
        this.objects.add({
            base: this.resources.items.crossroadsStaticBase.scene,
            collision: this.resources.items.crossroadsStaticCollision.scene,
            floorShadowTexture: this.resources.items.crossroadsStaticFloorShadowTexture,
            offset: new THREE.Vector3(this.x, this.y, 0),
            mass: 0
        })
    }

    setTiles()
    {
        // To intro
        // this.tiles.add({
        //     start: new THREE.Vector2(this.x, - 10),
        //     delta: new THREE.Vector2(0, this.y + 14)
        // })

        // // To projects
        // this.tiles.add({
        //     start: new THREE.Vector2(this.x + 12.5, this.y),
        //     delta: new THREE.Vector2(7.5, 0)
        // })

        // // To projects
        // this.tiles.add({
        //     start: new THREE.Vector2(this.x - 13, this.y),
        //     delta: new THREE.Vector2(- 6, 0)
        // })
    }
    setTitles()
    {
        // Title

        this.objects.add({
            base: this.resources.items.messageBase.scene,
            collision: this.resources.items.introRCollision.scene,
            offset: new THREE.Vector3(0, -50, 0),
            rotation: new THREE.Euler(0, 0, 0),
            shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
            mass: 0.1,
            soundName: 'brick'
        })

    }
}
