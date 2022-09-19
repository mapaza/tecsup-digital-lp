import React from 'react'
import {motion} from 'framer-motion'

function CienciaDatosSVG(props) {

    const icon = {
        hidden: {
            // opacity: 0,
            pathLength: 0,
            fill: "none",
        },
        visible: {
            // opacity: 1,  
            pathLength: 1,     
            fill: "none",
        }
    };
    const initial = "hidden";
    const animate = "visible";
    const transition = {
        duration: 2,
        ease: "easeInOut",
        // flip: Infinity,
    }

  return (
    <motion.svg 
        {...props} 
        height="512pt" 
        viewBox="-61 0 512 512.00043" 
        width="512pt" 
        xmlns="http://www.w3.org/2000/svg"
        style={{strokeWidth: "15px"}}
    >
          <motion.path
              d="m211.664062 99.9375c-4.144531 0-8.289062 1.570312-9.296874 4.929688l-21.617188 70.457031c-.113281.449219-.222656.898437-.222656 1.121093 0 3.585938 5.261718 6.050782 9.183594 6.050782 2.464843 0 4.367187-.785156 4.929687-2.914063l4.253906-14.898437h25.652344l4.257813 14.898437c.558593 2.128907 2.460937 2.914063 4.925781 2.914063 3.921875 0 9.1875-2.578125 9.1875-6.050782 0-.335937-.113281-.671874-.222657-1.121093l-21.621093-70.457031c-1.007813-3.359376-5.152344-4.929688-9.410157-4.929688zm-9.746093 53.320312 9.746093-34.386718 9.746094 34.386718zm0 0"
              variants={icon}
              initial={initial}
              animate={animate}
              transition={transition}
          />
          <motion.path 
              d="m255.683594 105.09375v72.808594c0 3.023437 3.582031 4.59375 7.28125 4.59375 3.582031 0 7.28125-1.570313 7.28125-4.59375v-72.808594c0-3.136719-3.699219-4.480469-7.28125-4.480469-3.699219 0-7.28125 1.34375-7.28125 4.480469zm0 0"
              variants={icon}
              initial={initial}
              animate={animate}
              transition={transition}
          />
          <motion.path 
              d="m363.910156 398.464844c-2.523437-6.96875-9.839844-10.832032-17.015625-8.976563l-4.964843 1.28125-19.550782-54.03125c-5.613281-15.503906-1.328125-32.546875 10.910156-43.417969 58.105469-51.621093 57.480469-111.84375 57.273438-131.636718-.5-47.996094-18.289062-88.996094-51.449219-118.566406-31.730469-28.300782-75.90625-43.617188-124.382812-43.1054692-46.417969.4843752-84.488281 10.8593752-113.15625 30.8359372-30.824219 21.480469-50.761719 53.984375-59.265625 96.609375-1.800782 9.019531-1.429688 18.554688 1.070312 27.574219l1.691406 6.101562c1.40625 5.070313.335938 10.597657-2.867187 14.773438-.019531.027344-.042969.058594-.066406.089844l-38.082031 51.226562c-4.054688 5.324219-5.144532 12.265625-2.921876 18.578125 2.230469 6.335938 7.457032 11.066407 13.980469 12.664063l28.703125 7.015625-8.789062 8.976562c-2.679688 2.734375-3.949219 6.480469-3.488282 10.28125.460938 3.796875 2.589844 7.132813 5.84375 9.144531l5.25 3.25-3.65625 2.867188c-3.199218 2.511719-4.984374 6.4375-4.777343 10.503906.207031 4.0625 2.386719 7.785156 5.828125 9.953125l10.097656 6.375-11.433594 35.785157c-3.324218 10.394531-1.074218 21.554687 6.015625 29.847656 7.089844 8.296875 17.761719 12.257812 28.550781 10.59375l44.453126-6.847656c4.042968-.621094 8.027343 1.5625 9.671874 5.316406l17.589844 40.101562-2.265625.582032c-6.3125 1.632812-10.71875 7.320312-10.71875 13.839843v41.648438c0 4.425781 1.996094 8.523437 5.480469 11.253906 2.550781 2 5.628906 3.046875 8.78125 3.046875 1.148438 0 2.308594-.140625 3.457031-.421875l218.800781-54c3.929688-.96875 7.277344-3.574219 9.183594-7.144531 1.90625-3.566406 2.210938-7.792969.832032-11.597656zm-216.921875 98.332031v-40.199219l31.089844-8.027344c4.011719-1.035156 6.421875-5.125 5.386719-9.136718-1.035156-4.011719-5.125-6.421875-9.136719-5.386719l-14.644531 3.78125-18.5625-42.328125c-4.375-9.96875-14.945313-15.78125-25.699219-14.113281l-44.453125 6.851562c-5.613281.863281-11.167969-1.199219-14.859375-5.519531-3.691406-4.316406-4.863281-10.125-3.132813-15.535156l13.203126-41.3125c1.039062-3.253906-.25-6.800782-3.140626-8.625l-12.050781-7.605469 3.679688-2.886719c3.214843-2.527344 5-6.472656 4.773437-10.554687-.226562-4.085938-2.4375-7.8125-5.917968-9.964844l-5.628907-3.480469 7.417969-7.574218c3.660156-3.734376 4.988281-8.96875 3.550781-13.996094-1.433593-5.023438-5.324219-8.765625-10.402343-10.007813l-29.785157-7.28125c-2.285156-.558593-3.136719-2.335937-3.394531-3.074219-.261719-.738281-.710938-2.65625.71875-4.523437.019531-.027344.042969-.058594.0625-.085937l38.082031-51.222657c6.019531-7.890625 8.03125-18.300781 5.382813-27.863281l-1.695313-6.101562c-1.875-6.765626-2.15625-13.898438-.8125-20.632813 15.085938-75.625 68.199219-114.445313 157.867188-115.375 44.753906-.441406 85.308593 13.492187 114.242187 39.296875 29.925782 26.6875 45.984375 63.871094 46.4375 107.53125.1875 18.101562.757813 73.179688-52.238281 120.261719-16.859375 14.976562-22.765625 38.425781-15.050781 59.742187l19.066406 52.691406-119.160156 30.769532c-4.011719 1.035156-6.421875 5.125-5.386719 9.136718 1.035156 4.011719 5.125 6.421876 9.136719 5.386719l138.09375-35.65625 14.125 39.03125zm0 0"
              variants={icon}
              initial={initial}
              animate={animate}
              transition={transition}
          />
          <motion.path 
              d="m225.535156 277.054688c2.480469 4.332031 7.121094 7.023437 12.109375 7.023437h23.78125c4.136719 0 8.03125-1.820313 10.691407-4.988281 2.65625-3.167969 3.769531-7.320313 3.046874-11.390625l-2.960937-16.761719c25.175781-.925781 45.242187-13.015625 49.382813-29.417969 2.949218-1.839843 5.539062-4.144531 7.734374-6.875 4.367188-5.429687 6.808594-12.222656 7.078126-19.488281 2.074218-1.554688 3.9375-3.355469 5.574218-5.390625 2.59375-3.230469 2.082032-7.949219-1.148437-10.546875-3.230469-2.59375-7.949219-2.082031-10.542969 1.148438-1.367188 1.699218-3.054688 3.09375-5.011719 4.136718-2.65625 1.421875-4.207031 4.292969-3.9375 7.292969.328125 3.628906-.046875 8.90625-3.699219 13.449219-1.585937 1.976562-3.585937 3.523437-5.9375 4.601562-2.472656 1.128906-4.136718 3.511719-4.355468 6.21875-.769532 9.625-16.324219 19.929688-38.25 19.929688-1.597656 0-3.269532-.074219-5.265625-.234375-2.320313-.1875-4.585938.710937-6.148438 2.433593-1.558593 1.71875-2.238281 4.0625-1.832031 6.347657l4.335938 24.535156h-21.921876l-19.992187-34.941406c-.773437-1.351563-1.945313-2.429688-3.359375-3.082031-7.3125-3.382813-12.277344-8.136719-13.625-13.039063-.863281-3.144531-3.660156-5.371094-6.917969-5.507813-19.226562-.800781-35.46875-10.269531-35.46875-20.679687 0-1.417969.308594-2.859375.914063-4.273437 1.027344-2.40625.730468-5.171876-.789063-7.300782-1.515625-2.132812-4.035156-3.320312-6.640625-3.132812-1.632812.117187-3.238281.175781-4.773437.175781-21.792969 0-36.773438-9.976563-38.160157-19.226563-.441406-2.9375-2.574218-5.339843-5.441406-6.121093-2.183594-.597657-4.171875-1.617188-5.902344-3.035157-8.757812-7.160156-8.65625-22.246093.222657-33.625 3.589843-4.601562 8.140625-8 13.160156-9.824218 2.511719-.914063 4.34375-3.09375 4.816406-5.71875 1.109375-6.15625 4.457031-12.074219 9.421875-16.660156 7.078125-6.535157 16.304688-9.300782 24.074219-7.230469 2.820313.75 5.820313-.199219 7.691406-2.441407 3.332031-3.992187 7.828125-7.074218 13-8.910156 8.144531-2.890625 16.8125-2.234375 23.179688 1.757813 2.664062 1.671875 6.085937 1.503906 8.574219-.421875 2.574218-1.988282 5.460937-3.558594 8.582031-4.667969 9.179687-3.261719 18.847656-2.019531 25.230469 3.234375 2.199218 1.808594 5.234374 2.21875 7.828124 1.054688 5.1875-2.316407 11.367188-2.917969 17.398438-1.691407 9.25 1.878907 16.929688 7.765625 20.046875 15.351563.960937 2.351562 3.050781 4.050781 5.542969 4.523437l.410156.070313c12.6875 2.578125 21.902344 12.480468 21.433594 23.035156-.128906 3 1.542968 5.792969 4.25 7.089844 9.914062 4.757812 15.640625 14.25 13.925781 23.09375-.320313 1.65625-.894531 3.257812-1.703125 4.765625-1.511719 2.816406-1.070312 6.285156 1.097656 8.632812 1.160156 1.257813 2.214844 2.605469 3.140625 4.011719 2.28125 3.457031 6.933594 4.410156 10.390625 2.132812 3.460938-2.28125 4.414063-6.933593 2.132813-10.390624-.464844-.707032-.949219-1.398438-1.457031-2.082032.472656-1.378906.847656-2.785156 1.125-4.214844 2.746093-14.164062-4.585938-28.902343-18.070313-37.234374-1.628906-14.964844-13.675781-28.203126-30.085937-32.769532-5.699219-10.359375-16.542969-18.144531-29.191407-20.714844-7.546875-1.535156-15.332031-1.128906-22.351562 1.113282-10.152344-6.347656-23.578125-7.597656-36.113281-3.148438-3.042969 1.082032-5.941407 2.464844-8.664063 4.128906-9.503906-4.238281-20.992187-4.585937-31.675781-.792968-6.21875 2.207031-11.8125 5.664062-16.394532 10.101562-11.519531-1.441406-23.992187 2.792969-33.523437 11.597656-6.269531 5.789063-10.8125 13.105469-13.058594 20.929688-6.109375 2.953125-11.578125 7.410156-15.992187 13.0625-13.851563 17.75-12.90625 42.183594 2.105468 54.464844 2.1875 1.785156 4.574219 3.25 7.136719 4.371094 2.566407 7.453124 8.546875 14.085937 17.25 19.007812 8.632813 4.886719 19.492188 7.789062 30.90625 8.308594.269531 17.851562 19.179688 32.308594 44.925781 34.929687 3.332032 6.535157 9.382813 12.21875 17.566407 16.441407zm0 0"
              variants={icon}
              initial={initial}
              animate={animate}
              transition={transition}
          />
    </motion.svg>
  )
}

export default CienciaDatosSVG
