import classes from './main-header-background.module.css';

export default function MainHeaderBackground(){
    return(
        <div classname={classes["header-background"]}>
      <svg xmlns = "http://www.w3.org/2000svg" viewBox="0 0 144">
        <defs>
          <lineaarGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style = {{stopColor: '#59453c', stopOpacity: '1'}}
              />
              <stop
              offset="100%"
              style = {{stopColor: '#59453c', stopOpacity: '1'}}
              />
          </lineaarGradient>
        </defs>
        <path
        fill="url(#gradient)"
        d="M0,256L48,240C96,224,192,192,288,181,3C384,171,488"
        ></path>
      </svg>
      </div>

    );
}