import React from 'react'

const SmallBanner = ({path}:{path:string}) => {
  return (
   <svg className='w-full' xmlns="http://www.w3.org/2000/svg" width="138" height="138" viewBox="0 0 138 138" fill="none">
   <g clip-path="url(#clip0_9883_124999)">
   <rect width="138" height="138" rx="24" fill={path??"#E1071A"} fill-opacity="0.8"/>
   <g clip-path="url(#clip1_9883_124999)">
   <path d="M42.2153 112.701C45.2359 117.933 46.0544 124.151 44.4908 129.986C42.9272 135.822 39.1096 140.797 33.8778 143.817C28.6459 146.838 22.4284 147.657 16.5931 146.093C10.7577 144.529 5.78247 140.712 2.76186 135.48C-2.63925 126.125 1.15008 115.166 1.15008 115.166C4.17624 117.121 7.9153 118.959 10.1801 116.789C16.372 110.859 2.92529 98.967 2.92529 98.967C2.92529 98.967 17.2215 95.1157 26.7747 110.488C27.4023 108.336 27.4462 106.056 26.9019 103.881C26.3575 101.707 25.2444 99.7164 23.6769 98.114C31.5426 100.333 38.2086 105.578 42.2153 112.701Z" fill="white" fill-opacity="0.8"/>
   <path d="M2.81461 116.171C2.02028 119.887 1.15404 127.441 5.03645 134.165C7.94363 139.199 12.6656 142.931 18.2351 144.597C23.8047 146.263 29.8003 145.736 34.9941 143.125C39.8525 139.933 43.3066 135.003 44.6488 129.347C45.991 123.691 45.1198 117.736 42.2137 112.701C38.9434 106.986 33.9753 102.431 27.9987 99.6688C32.5222 108.18 26.7731 110.488 26.7731 110.488C20.0323 99.641 10.9369 98.3673 6.16158 98.5558C20.1479 111.278 13.1476 125.436 2.81461 116.171Z" fill="white" fill-opacity="0.7"/>
   <path d="M37.7533 136.519C39.8481 135.309 40.3698 132.29 38.9186 129.776C37.4673 127.263 34.5915 126.205 32.4967 127.414C30.4019 128.624 29.8797 131.642 31.3314 134.157C32.7831 136.671 35.6585 137.728 37.7533 136.519ZM33.8109 129.69C34.5286 129.276 35.868 129.749 36.6424 131.09C37.4169 132.432 37.1569 133.828 36.4391 134.243C35.7214 134.657 34.3816 134.183 33.6076 132.843C32.8335 131.502 33.0931 130.105 33.8109 129.69Z" fill={path??"#E1071A"}/>
   <path d="M12.4733 120.767C10.3785 121.976 9.85628 124.995 11.308 127.509C12.7597 130.024 15.635 131.081 17.7298 129.871C19.8247 128.662 20.3464 125.643 18.8952 123.129C17.4439 120.615 14.5681 119.557 12.4733 120.767ZM16.4157 127.595C15.698 128.01 14.3582 127.536 13.5841 126.195C12.8101 124.855 13.0697 123.457 13.7874 123.043C14.5052 122.629 15.8445 123.102 16.619 124.443C17.3935 125.784 17.1334 127.181 16.4157 127.595Z" fill={path??"#E1071A"}/>
   <path d="M22.0526 116.172L25.5394 141.47C25.6384 142.189 26.3015 142.691 27.0203 142.592C27.7392 142.493 28.2416 141.83 28.1425 141.111L24.6557 115.813C24.5567 115.094 23.8936 114.592 23.1748 114.691C22.4559 114.79 21.9535 115.453 22.0526 116.172Z" fill={path??"#E1071A"}/>
   </g>
   <g clip-path="url(#clip2_9883_124999)">
   <path d="M112.205 22.4627C110.641 28.2981 106.824 33.2733 101.592 36.2939C96.3599 39.3145 90.1424 40.133 84.3071 38.5695C78.4717 37.0059 73.4965 33.1883 70.4759 27.9564C67.4553 22.7246 66.6367 16.5071 68.2003 10.6717C70.9961 0.237555 81.4244 -4.83186 81.4244 -4.83186C82.1823 -1.31008 83.5264 2.63362 86.662 2.70104C95.2334 2.88624 94.1343 -15.0312 94.1343 -15.0312C94.1343 -15.0312 106.967 -7.64557 102.852 9.97954C104.817 8.9017 106.461 7.32039 107.613 5.39783C108.766 3.47527 109.387 1.28067 109.411 -0.960834C113.404 6.17012 114.409 14.5927 112.205 22.4627Z" fill="white" fill-opacity="0.8"/>
   <path d="M81.8906 -2.94275C78.7013 -0.876792 72.7479 3.85158 70.7382 11.3518C69.2342 16.9672 69.9341 22.9451 72.6945 28.0613C75.4549 33.1774 80.067 37.0445 85.5861 38.8705C91.2787 40.0487 97.2064 39.0057 102.155 35.9552C107.104 32.9047 110.699 28.0776 112.204 22.4625C113.932 16.1093 113.64 9.37555 111.368 3.196C108.548 12.4129 102.851 9.9794 102.851 9.9794C105.754 -2.45673 100.223 -9.78885 96.7134 -13.0322C97.6074 5.85343 82.6463 10.9146 81.8906 -2.94275Z" fill="white" fill-opacity="0.7"/>
   <path d="M92.2094 36.1519C94.5459 36.778 97.0499 35.0118 97.8011 32.2082C98.5524 29.4046 97.2669 26.6231 94.9304 25.997C92.594 25.371 90.0902 27.1363 89.3387 29.9407C88.5873 32.7452 89.873 35.5259 92.2094 36.1519ZM94.2502 28.5358C95.0507 28.7503 95.6633 30.0318 95.2624 31.528C94.8615 33.0241 93.6902 33.8277 92.8897 33.6132C92.0891 33.3987 91.4768 32.1163 91.8774 30.621C92.2781 29.1257 93.4496 28.3212 94.2502 28.5358Z" fill={path??"#E1071A"}/>
   <path d="M85.4734 7.13668C83.1369 6.51062 80.6331 8.27593 79.8817 11.0804C79.1302 13.8848 80.4159 16.6655 82.7524 17.2916C85.0889 17.9176 87.5929 16.1515 88.3441 13.3479C89.0953 10.5443 87.8099 7.76273 85.4734 7.13668ZM83.4326 14.7528C82.6321 14.5383 82.0197 13.2559 82.4204 11.7606C82.8211 10.2653 83.9926 9.4609 84.7931 9.6754C85.5937 9.88991 86.2063 11.1715 85.8054 12.6676C85.4045 14.1638 84.2332 14.9674 83.4326 14.7528Z" fill={path??"#E1071A"}/>
   <path d="M95.4978 10.6631L80.0748 31.0173C79.6365 31.5956 79.7501 32.4197 80.3285 32.858C80.9068 33.2962 81.7309 33.1826 82.1692 32.6043L97.5922 12.2502C98.0305 11.6718 97.9169 10.8477 97.3385 10.4094C96.7602 9.9712 95.9361 10.0848 95.4978 10.6631Z" fill={path??"#E1071A"}/>
   </g>
   <g clip-path="url(#clip3_9883_124999)">
   <path d="M123.655 115.884C122.815 119.018 120.765 121.691 117.954 123.314C115.144 124.936 111.804 125.376 108.669 124.536C105.535 123.696 102.862 121.645 101.24 118.835C99.6173 116.025 99.1776 112.685 100.017 109.55C101.519 103.945 107.121 101.222 107.121 101.222C107.528 103.114 108.25 105.232 109.934 105.269C114.539 105.368 113.948 95.7434 113.948 95.7434C113.948 95.7434 120.841 99.7107 118.631 109.178C119.687 108.599 120.57 107.75 121.189 106.717C121.808 105.684 122.141 104.506 122.155 103.302C124.299 107.132 124.839 111.656 123.655 115.884Z" fill="white" fill-opacity="0.8"/>
   <path d="M107.371 102.237C105.658 103.346 102.46 105.886 101.381 109.915C100.573 112.932 100.949 116.143 102.431 118.891C103.914 121.639 106.392 123.716 109.356 124.697C112.414 125.33 115.598 124.77 118.257 123.131C120.915 121.493 122.846 118.9 123.655 115.883C124.583 112.471 124.426 108.854 123.205 105.534C121.691 110.485 118.63 109.178 118.63 109.178C120.19 102.498 117.219 98.5591 115.334 96.8169C115.814 106.962 107.777 109.68 107.371 102.237Z" fill="white" fill-opacity="0.7"/>
   <path d="M112.913 123.238C114.168 123.574 115.513 122.625 115.916 121.119C116.32 119.613 115.629 118.119 114.374 117.783C113.119 117.447 111.774 118.395 111.371 119.901C110.967 121.408 111.658 122.901 112.913 123.238ZM114.009 119.147C114.439 119.262 114.768 119.95 114.553 120.754C114.337 121.558 113.708 121.989 113.278 121.874C112.848 121.759 112.519 121.07 112.734 120.267C112.95 119.463 113.579 119.031 114.009 119.147Z" fill={path??"#E1071A"}/>
   <path d="M109.296 107.651C108.041 107.315 106.696 108.263 106.293 109.769C105.889 111.276 106.58 112.77 107.835 113.106C109.09 113.442 110.435 112.493 110.838 110.987C111.242 109.481 110.551 107.987 109.296 107.651ZM108.2 111.742C107.77 111.627 107.441 110.938 107.656 110.135C107.872 109.332 108.501 108.899 108.931 109.015C109.361 109.13 109.69 109.818 109.475 110.622C109.259 111.426 108.63 111.857 108.2 111.742Z" fill={path??"#E1071A"}/>
   <path d="M114.68 109.546L106.395 120.479C106.16 120.79 106.221 121.233 106.531 121.468C106.842 121.704 107.285 121.643 107.52 121.332L115.805 110.398C116.04 110.088 115.979 109.645 115.669 109.41C115.358 109.174 114.915 109.235 114.68 109.546Z" fill={path??"#E1071A"}/>
   </g>
   <g clip-path="url(#clip4_9883_124999)">
   <path d="M36.6786 30.7974C36.6786 34.0425 35.3895 37.1547 33.0949 39.4494C30.8002 41.744 27.688 43.0332 24.4428 43.0332C21.1977 43.0332 18.0855 41.744 15.7908 39.4494C13.4962 37.1547 12.207 34.0425 12.207 30.7974C12.207 24.9948 16.9131 20.9146 16.9131 20.9146C17.796 22.6365 19.0417 24.4959 20.678 24.095C25.1511 22.9994 22.0898 13.8555 22.0898 13.8555C22.0898 13.8555 29.7748 15.9036 30.0901 25.6207C30.9601 24.7882 31.593 23.7392 31.9238 22.5814C32.2546 21.4236 32.2714 20.1986 31.9726 19.0322C35.0357 22.177 36.7279 26.4075 36.6786 30.7974Z" fill="white" fill-opacity="0.8"/>
   <path d="M17.4164 21.83C16.0488 23.3454 13.6172 26.6265 13.6172 30.7975C13.6175 33.9202 14.8118 36.9246 16.9553 39.1954C19.0989 41.4662 22.0296 42.8315 25.1471 43.0116C28.2646 42.8315 31.1953 41.4662 33.3388 39.1954C35.4824 36.9246 36.6767 33.9202 36.677 30.7975C36.6905 27.2607 35.6026 23.8074 33.5644 20.917C33.3827 26.0914 30.0885 25.6208 30.0885 25.6208C29.8659 18.7645 25.9768 15.7291 23.7047 14.5342C26.7942 24.2089 19.7351 28.915 17.4164 21.83Z" fill="white" fill-opacity="0.7"/>
   <path d="M28.2085 40.6795C29.5079 40.6795 30.5615 39.415 30.5615 37.8559C30.5615 36.2968 29.5079 35.0322 28.2085 35.0322C26.9092 35.0322 25.8555 36.2963 25.8555 37.8559C25.8555 39.4155 26.9092 40.6795 28.2085 40.6795ZM28.2085 36.4441C28.6537 36.4441 29.1497 37.0238 29.1497 37.8559C29.1497 38.6879 28.6537 39.2677 28.2085 39.2677C27.7633 39.2677 27.2673 38.6874 27.2673 37.8559C27.2673 37.0243 27.7633 36.4441 28.2085 36.4441Z" fill={path??"#E1071A"}/>
   <path d="M20.6773 26.5615C19.3779 26.5615 18.3242 27.8256 18.3242 29.3852C18.3242 30.9448 19.3779 32.2088 20.6773 32.2088C21.9766 32.2088 23.0303 30.9443 23.0303 29.3852C23.0303 27.826 21.9766 26.5615 20.6773 26.5615ZM20.6773 30.797C20.2321 30.797 19.736 30.2167 19.736 29.3852C19.736 28.5536 20.2321 27.9733 20.6773 27.9733C21.1225 27.9733 21.6185 28.5531 21.6185 29.3852C21.6185 30.2172 21.1225 30.797 20.6773 30.797Z" fill={path??"#E1071A"}/>
   <path d="M26.3685 26.9975L21.1958 39.7028C21.0488 40.0638 21.2223 40.4756 21.5834 40.6226C21.9444 40.7696 22.3562 40.596 22.5032 40.235L27.6758 27.5298C27.8228 27.1688 27.6493 26.757 27.2883 26.61C26.9273 26.463 26.5155 26.6365 26.3685 26.9975Z" fill={path??"#E1071A"}/>
   </g>
   </g>
   <rect x="1" y="1" width="136" height="136" rx="23" stroke={path??"#E1071A"} stroke-width="2"/>
   <defs>
   <clipPath id="clip0_9883_124999">
   <rect width="138" height="138" rx="24" fill="white"/>
   </clipPath>
   <clipPath id="clip1_9883_124999">
   <rect width="56.07" height="56.07" fill="white" transform="translate(-18 110.035) rotate(-30)"/>
   </clipPath>
   <clipPath id="clip2_9883_124999">
   <rect width="56.07" height="56.07" fill="white" transform="translate(71.5117 -22) rotate(15)"/>
   </clipPath>
   <clipPath id="clip3_9883_124999">
   <rect width="30.1189" height="30.1189" fill="white" transform="translate(101.797 92) rotate(15)"/>
   </clipPath>
   <clipPath id="clip4_9883_124999">
   <rect width="30.1189" height="30.1189" fill="white" transform="translate(9.38281 13.3848)"/>
   </clipPath>
   </defs>
   </svg>
  )
}

export default SmallBanner