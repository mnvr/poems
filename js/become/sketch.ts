const sketch = (p5: any, parent: HTMLElement) => {
    p5.setup = () => {
        p5.createCanvas(...sketchSize(), undefined, { alpha: true });
    };

    const sketchSize = () => [parent.scrollWidth, parent.scrollHeight] as const;

    p5.draw = () => {
        p5.clear();
        p5.strokeWeight(30);
        p5.point(100, 100);
    };
};
