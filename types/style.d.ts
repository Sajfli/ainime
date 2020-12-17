declare module "*.m.scss" {
    const styles: { [className: string]: string };
    export default styles;
}

declare module "*.m.css" {
    const styles: { [className: string]: string };
    export default styles;
}

// declare module "*.module.css";