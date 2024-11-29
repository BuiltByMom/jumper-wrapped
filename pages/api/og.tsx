import {ImageResponse} from '@vercel/og';

export const config = {
	runtime: 'edge'
};

export default async function handler(context: any): Promise<ImageResponse> {
	const rootURL = new URL(context.url);
	const stringifiedRootURL = rootURL.origin;
	console.warn(stringifiedRootURL);
	const boldFontDataRoot = await fetch(new URL('../../public/fonts/SpaceGrotesk-Bold.ttf', import.meta.url));
	const boldFontData = await boldFontDataRoot.arrayBuffer();
	const semiBoldFontDataRoot = await fetch(new URL('../../public/fonts/SpaceGrotesk-SemiBold.ttf', import.meta.url));
	const semiBoldFontData = await semiBoldFontDataRoot.arrayBuffer();

	const backgroundURL = '/og/wrap-bg.png';
	const footerBackgroundURL = '/og/wrap-footer.jpg';

	const titleOG = (
		<svg
			width={'558'}
			height={'159'}
			viewBox={'0 0 558 159'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<path
				d={
					'M270.25 158.25H264.5V152.5V146.75V141V135.25H258.75V129.5H264.5V123.75V118V112.25V106.5V100.75H270.25V95H276V100.75V106.5V112.25V118V123.75V129.5V135.25V141V146.75H281.75V152.5H276V158.25H270.25ZM235.75 158.25H230V152.5V146.75V141V135.25V129.5V123.75V118V112.25H224.25V106.5H230V100.75H235.75V95H241.5V100.75V106.5V112.25H247.25V118H253V123.75H258.75V129.5H253V123.75H247.25V118H241.5V123.75V129.5V135.25V141V146.75H247.25V152.5H241.5V158.25H235.75Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M201.25 152.5H207V158.25H201.25H195.5H189.75H184H178.25V152.5H172.5V146.75V141V135.25V129.5V123.75V118V112.25H166.75V106.5H172.5V100.75H178.25V95H184V100.75H189.75V106.5H184V112.25V118V123.75H189.75H195.5H201.25V129.5H195.5H189.75H184V135.25V141V146.75H189.75V152.5H195.5H201.25ZM207 152.5V146.75H212.75V152.5H207ZM207 112.25H201.25V106.5H195.5V100.75H189.75V95H195.5H201.25H207V100.75H212.75V95H218.5V100.75V106.5H212.75V112.25H207Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M143.75 152.5H149.5V158.25H143.75H138H132.25H126.5V152.5H120.75V146.75H115V141V135.25V129.5V123.75V118V112.25H120.75V106.5H126.5V112.25V118V123.75V129.5V135.25V141H132.25V146.75H138V152.5H143.75ZM149.5 152.5V146.75V141V135.25H143.75V129.5H149.5H155.25H161V135.25V141V146.75H155.25V152.5H149.5ZM155.25 112.25H149.5V106.5H143.75V100.75H138H132.25V106.5H126.5V100.75H132.25V95H138H143.75H149.5H155.25V100.75H161V106.5V112.25H155.25Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M92 152.5H97.75V158.25H92H86.25H80.5H74.75H69V152.5H63.25V146.75V141V135.25V129.5V123.75V118V112.25H57.5V106.5H63.25V100.75H69V95H74.75V100.75H80.5V106.5H74.75V112.25V118V123.75H80.5H86.25H92V129.5H86.25H80.5H74.75V135.25V141V146.75H80.5V152.5H86.25H92ZM97.75 152.5V146.75H103.5V152.5H97.75ZM97.75 112.25H92V106.5H86.25V100.75H80.5V95H86.25H92H97.75V100.75H103.5V95H109.25V100.75V106.5H103.5V112.25H97.75Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M23 152.5H28.75V146.75H34.5V141H40.25V135.25V129.5V123.75V118V112.25H34.5V106.5H28.75V100.75H23H17.25V106.5V112.25V118V123.75V129.5V135.25V141V146.75V152.5H23ZM23 158.25H17.25H11.5H5.75V152.5V146.75V141V135.25V129.5V123.75V118V112.25H0V106.5H5.75V100.75H11.5V95H17.25H23H28.75H34.5H40.25V100.75H46V106.5H51.75V112.25V118V123.75V129.5V135.25H46V141H40.25V146.75H34.5V152.5H28.75V158.25H23Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M546.25 63.25H540.5V57.5V51.75V46V40.25H534.75V34.5H540.5V28.75V23V17.25V11.5V5.75H546.25V0H552V5.75V11.5V17.25V23V28.75V34.5V40.25V46V51.75H557.75V57.5H552V63.25H546.25ZM511.75 63.25H506V57.5V51.75V46V40.25V34.5V28.75V23V17.25H500.25V11.5H506V5.75H511.75V0H517.5V5.75V11.5V17.25H523.25V23H529V28.75H534.75V34.5H529V28.75H523.25V23H517.5V28.75V34.5V40.25V46V51.75H523.25V57.5H517.5V63.25H511.75Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M483 63.25H477.25V57.5V51.75V46V40.25V34.5V28.75V23V17.25H471.5V11.5H477.25V5.75H483V0H488.75V5.75V11.5V17.25V23V28.75V34.5V40.25V46V51.75H494.5V57.5H488.75V63.25H483Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M454.25 63.25H448.5V57.5V51.75V46V40.25V34.5H442.75V40.25H437V34.5H442.75V28.75H448.5V23V17.25H442.75V11.5H437H431.25V17.25V23V28.75V34.5V40.25H437V46H431.25V51.75H437V57.5H431.25V63.25H425.5H419.75V57.5V51.75V46V40.25V34.5V28.75V23V17.25H425.5V11.5H431.25V5.75H437V0H442.75H448.5V5.75H454.25V11.5H460V17.25V23V28.75V34.5V40.25V46V51.75H465.75V57.5H460V63.25H454.25Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M402.5 63.25H396.75V57.5V51.75V46V40.25V34.5H391H385.25H379.5V40.25V46V51.75V57.5V63.25H373.75H368V57.5V51.75V46V40.25V34.5V28.75V23V17.25H362.25V11.5H368V5.75H373.75V0H379.5V5.75V11.5V17.25V23V28.75H385.25H391H396.75V23V17.25V11.5V5.75H402.5V0H408.25V5.75V11.5V17.25V23V28.75V34.5V40.25V46V51.75H414V57.5H408.25V63.25H402.5Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M339.25 57.5H345V63.25H339.25H333.5H327.75H322V57.5H316.25V51.75H310.5V46V40.25V34.5V28.75V23V17.25H316.25V11.5H322V17.25V23V28.75V34.5V40.25V46H327.75V51.75H333.5V57.5H339.25ZM345 57.5V51.75H350.75V57.5H345ZM350.75 51.75V46H356.5V51.75H350.75ZM350.75 17.25H345H339.25V11.5H333.5V5.75H327.75V11.5H322V5.75H327.75V0H333.5H339.25H345V5.75H350.75V0H356.5V5.75V11.5V17.25H350.75Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={'M299 40.25H304.75V46H299H293.25H287.5H281.75H276H270.25V40.25H276H281.75H287.5H293.25H299Z'}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M253 63.25H247.25V57.5V51.75V46V40.25V34.5V28.75V23V17.25H241.5V11.5H247.25V5.75H253V0H258.75V5.75V11.5V17.25V23V28.75V34.5V40.25V46V51.75H264.5V57.5H258.75V63.25H253Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M184 17.25V11.5H189.75V17.25H184ZM218.5 63.25H212.75H207V57.5H201.25V51.75V46V40.25V34.5V28.75V23V17.25V11.5H207V5.75H201.25H195.5V11.5H189.75V5.75H195.5V0H201.25H207H212.75H218.5H224.25V5.75H230V0H235.75V5.75V11.5V17.25H230H224.25V11.5H218.5V5.75H212.75V11.5V17.25V23V28.75V34.5V40.25V46V51.75H218.5V57.5H224.25V63.25H218.5ZM224.25 57.5V51.75H230V57.5H224.25ZM230 51.75V46H235.75V51.75H230Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M166.75 57.5H172.5V63.25H166.75H161H155.25H149.5H143.75V57.5V51.75V46V40.25V34.5V28.75V23V17.25H138V11.5H143.75V5.75H149.5V0H155.25V5.75V11.5V17.25V23V28.75V34.5V40.25V46V51.75V57.5H161H166.75ZM172.5 57.5V51.75H178.25V57.5H172.5Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M120.75 63.25H115H109.25H103.5H97.75H92H86.25V57.5H80.5V51.75V46V40.25V34.5V28.75V23V17.25H74.75V11.5H80.5V5.75H86.25V0H92V5.75V11.5V17.25V23V28.75V34.5V40.25V46V51.75H97.75V57.5H103.5H109.25H115V51.75V46V40.25V34.5V28.75V23V17.25H109.25V11.5H115V5.75H120.75V0H126.5V5.75V11.5V17.25V23V28.75V34.5V40.25V46V51.75H132.25V57.5H126.5V63.25H120.75Z'
				}
				fill={'#FFBF91'}
			/>
			<path
				d={
					'M57.5 63.25H51.75V57.5V51.75V46V40.25V34.5V28.75V23V17.25V11.5H46V17.25H40.25V23V28.75V34.5V40.25V46V51.75H46V57.5H40.25V63.25H34.5H28.75V57.5V51.75V46V40.25V34.5V28.75V23V17.25V11.5H23V17.25H17.25V23V28.75V34.5V40.25V46V51.75H23V57.5H17.25V63.25H11.5H5.75V57.5V51.75V46V40.25V34.5V28.75V23V17.25H0V11.5H5.75V5.75H11.5V0H17.25V5.75V11.5H23V5.75H28.75V0H34.5H40.25V5.75V11.5H46V5.75H51.75V0H57.5H63.25V5.75V11.5V17.25V23V28.75V34.5V40.25V46V51.75H69V57.5H63.25V63.25H57.5Z'
				}
				fill={'#FFBF91'}
			/>
		</svg>
	);
	const wrapButton = (
		<svg
			width={'402'}
			height={'80'}
			viewBox={'0 0 402 80'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<rect
				width={'401.25'}
				height={'80'}
				rx={'40'}
				fill={'#33FFEE'}
			/>
			<path
				d={
					'M320.578 51.5385V28.4616H330.6C332.05 28.4616 333.314 28.7143 334.391 29.2198C335.468 29.7253 336.303 30.4396 336.896 31.3627C337.49 32.2858 337.786 33.3737 337.786 34.6264V35.022C337.786 36.4066 337.457 37.5275 336.797 38.3846C336.138 39.2418 335.325 39.8682 334.358 40.2638V40.8572C335.237 40.9011 335.918 41.2088 336.402 41.7802C336.885 42.3297 337.127 43.066 337.127 43.989V51.5385H332.775V44.6154C332.775 44.0879 332.633 43.6594 332.347 43.3297C332.083 43 331.633 42.8352 330.995 42.8352H324.929V51.5385H320.578ZM324.929 38.8792H330.138C331.171 38.8792 331.973 38.6044 332.545 38.055C333.138 37.4835 333.435 36.7363 333.435 35.8132V35.4836C333.435 34.5605 333.149 33.8242 332.578 33.2748C332.006 32.7033 331.193 32.4176 330.138 32.4176H324.929V38.8792Z'
				}
				fill={'black'}
			/>
			<path
				d={
					'M298.101 51.5385L304.167 28.4616H311.749L317.815 51.5385H313.332L312.079 46.4616H303.837L302.585 51.5385H298.101ZM304.859 42.4396H311.057L308.255 31.1978H307.662L304.859 42.4396Z'
				}
				fill={'black'}
			/>
			<path
				d={
					'M281.43 51.5385V28.4616H296.265V32.4176H285.782V37.9231H295.342V41.8791H285.782V47.5824H296.463V51.5385H281.43Z'
				}
				fill={'black'}
			/>
			<path
				d={
					'M266.791 51.5385V43.5934L258.945 28.4616H263.791L268.67 38.3517H269.264L274.143 28.4616H278.989L271.143 43.5934V51.5385H266.791Z'
				}
				fill={'black'}
			/>
			<path
				d={
					'M231.979 51.5385V28.4616H242.001C243.452 28.4616 244.715 28.7143 245.792 29.2198C246.869 29.7253 247.704 30.4396 248.298 31.3627C248.891 32.2858 249.188 33.3737 249.188 34.6264V35.022C249.188 36.4066 248.858 37.5275 248.199 38.3846C247.539 39.2418 246.726 39.8682 245.759 40.2638V40.8572C246.638 40.9011 247.32 41.2088 247.803 41.7802C248.287 42.3297 248.528 43.066 248.528 43.989V51.5385H244.177V44.6154C244.177 44.0879 244.034 43.6594 243.748 43.3297C243.484 43 243.034 42.8352 242.397 42.8352H236.331V51.5385H231.979ZM236.331 38.8792H241.539C242.572 38.8792 243.375 38.6044 243.946 38.055C244.539 37.4835 244.836 36.7363 244.836 35.8132V35.4836C244.836 34.5605 244.55 33.8242 243.979 33.2748C243.408 32.7033 242.594 32.4176 241.539 32.4176H236.331V38.8792Z'
				}
				fill={'black'}
			/>
			<path
				d={
					'M218.73 52C216.84 52 215.214 51.6594 213.851 50.978C212.51 50.2747 211.477 49.2857 210.752 48.011C210.049 46.7143 209.697 45.1868 209.697 43.4286V28.4616H214.049V43.5605C214.049 44.9671 214.445 46.077 215.236 46.8901C216.049 47.7033 217.214 48.1099 218.73 48.1099C220.247 48.1099 221.401 47.7033 222.192 46.8901C223.005 46.077 223.412 44.9671 223.412 43.5605V28.4616H227.763V43.4286C227.763 45.1868 227.401 46.7143 226.675 48.011C225.972 49.2857 224.939 50.2747 223.576 50.978C222.236 51.6594 220.62 52 218.73 52Z'
				}
				fill={'black'}
			/>
			<path
				d={
					'M196.518 52C193.617 52 191.309 51.2088 189.595 49.6264C187.881 48.022 187.023 45.7362 187.023 42.7692V37.2308C187.023 34.2637 187.881 31.989 189.595 30.4066C191.309 28.8022 193.617 28 196.518 28C199.419 28 201.727 28.8022 203.441 30.4066C205.155 31.989 206.012 34.2637 206.012 37.2308V42.7692C206.012 45.7362 205.155 48.022 203.441 49.6264C201.727 51.2088 199.419 52 196.518 52ZM196.518 48.1099C198.144 48.1099 199.408 47.6373 200.309 46.6923C201.21 45.7472 201.661 44.4835 201.661 42.9011V37.0989C201.661 35.5165 201.21 34.2527 200.309 33.3077C199.408 32.3626 198.144 31.8901 196.518 31.8901C194.914 31.8901 193.65 32.3626 192.727 33.3077C191.826 34.2527 191.375 35.5165 191.375 37.0989V42.9011C191.375 44.4835 191.826 45.7472 192.727 46.6923C193.65 47.6373 194.914 48.1099 196.518 48.1099Z'
				}
				fill={'black'}
			/>
			<path
				d={
					'M173.846 51.5385V43.5934L166 28.4616H170.846L175.725 38.3517H176.319L181.198 28.4616H186.044L178.198 43.5934V51.5385H173.846Z'
				}
				fill={'black'}
			/>
			<path
				d={
					'M148.979 51.3838V52H139.998V51.3838C142.689 51.1568 142.754 51.1568 142.754 48.3676V31.6324C142.754 28.8432 142.689 28.8432 139.998 28.6162V28H148.946C153.42 28 156.209 30.4 156.209 34.2919C156.209 38.7351 152.999 41.6541 147.617 41.6541H145.899V48.3676C145.899 51.1568 145.964 51.1568 148.979 51.3838ZM145.899 40.7784H147.098C150.827 40.7784 152.837 39.2216 152.837 35.2C152.837 32.0216 151.378 28.7135 147.941 28.7135C145.964 28.7135 145.899 28.8432 145.899 31.4054V40.7784Z'
				}
				fill={'black'}
			/>
			<path
				d={
					'M120.108 52L127.635 28H130.686L138.213 52H135.738L133.568 44.8H124.753L122.583 52H120.108ZM129.161 30.1296L125.397 42.569H132.924L129.161 30.1296Z'
				}
				fill={'black'}
			/>
			<path
				d={
					'M94.6914 51.9315V28H109.002C113.727 28 117.87 29.301 117.87 33.8203C117.87 37.1755 115.576 38.9558 112.46 39.4351V40.5649C115.644 40.7703 114.96 43.7147 114.241 48.097H118.109V52H108.146L111.536 42.4479H99.3818V51.9315H94.6914ZM99.3818 31.8003V38.7846L108.9 38.8531C111.228 38.8873 113.214 37.6548 113.214 35.3267C113.214 32.9301 111.228 31.8003 108.968 31.8003H99.3818Z'
				}
				fill={'black'}
			/>
			<path
				d={
					'M64.779 52L62.9961 28H66.1847L67.3847 48.0229L76.059 28H79.7618L82.8132 48.0229L89.6361 28H92.8247L84.3218 52H80.379L77.2932 32.4914L68.7218 52H64.779Z'
				}
				fill={'black'}
			/>
		</svg>
	);
	const jumperLogo = (
		<svg
			width={'185'}
			height={'40'}
			viewBox={'0 0 185 40'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<g clip-path={'url(#clip0_299_1994)'}>
				<path
					d={
						'M21.4276 20.0005L7.2854 34.1426L10.8209 37.6783C12.5886 39.446 16.1241 39.446 17.8919 37.6783L32.034 23.5361C33.8018 21.7684 33.802 18.2326 32.034 16.4651L24.9631 9.39392L17.8921 16.4651L21.4276 20.0005Z'
					}
					fill={'white'}
				/>
				<path
					d={
						'M7.28027 5.85379L10.8158 2.31826C12.5836 0.550489 16.1191 0.550489 17.8868 2.31826L21.4225 5.85379L14.3513 12.9249L7.28027 5.85379Z'
					}
					fill={'white'}
				/>
				<path
					d={
						'M165.003 22.4939H170.003V14.9939H185.003V12.4939C185.003 11.2439 183.753 9.9939 182.503 9.9939H167.503C166.253 9.9939 165.003 11.2439 165.003 12.4939V22.4939Z'
					}
					fill={'white'}
				/>
				<path
					d={
						'M170.003 29.9967H167.503C166.253 29.9967 165.003 28.7467 165.003 27.4967V24.9967H170.003V29.9967Z'
					}
					fill={'white'}
				/>
				<path
					d={
						'M146.253 24.9939V21.6606H158.753V18.3272H146.253V14.9939H161.253V12.4939C161.253 11.2439 160.003 9.9939 158.753 9.9939H143.753C142.503 9.9939 141.253 11.2439 141.253 12.4939V27.4939C141.253 28.7439 142.503 29.9939 143.753 29.9939H158.753C160.003 29.9939 161.253 28.7439 161.253 27.4939V24.9939H146.253Z'
					}
					fill={'white'}
				/>
				<path
					d={
						'M118.753 24.9967H123.753V29.9967H121.253C120.003 29.9967 118.753 28.7467 118.753 27.4967V24.9967Z'
					}
					fill={'white'}
				/>
				<path
					fill-rule={'evenodd'}
					clip-rule={'evenodd'}
					d={
						'M121.253 9.9939C120.003 9.9939 118.753 11.2439 118.753 12.4939V24.9939H131.253C136.253 24.9939 138.753 21.2439 138.753 17.4939C138.753 13.7439 136.253 9.9939 131.253 9.9939H121.253ZM131.253 14.9939H123.753V19.9939H131.253C133.128 19.9939 133.753 18.4144 133.753 17.4939C133.753 16.5734 133.128 14.9939 131.253 14.9939Z'
					}
					fill={'white'}
				/>
				<path
					d={
						'M115 12.4939C115 11.2439 113.75 9.9939 112.5 9.9939H97.5C96.25 9.9939 95 11.2439 95 12.4939V27.4939C95 28.7439 96.25 29.9939 97.5 29.9939H100V14.9939H103.125V29.9939H106.875V14.9939H110V29.9939H112.5C113.75 29.9939 115 28.7439 115 27.4939C115 26.2439 115 12.4939 115 12.4939Z'
					}
					fill={'white'}
				/>
				<path
					d={
						'M71.2532 12.4931C71.2532 11.2431 72.5029 9.99313 73.7529 9.9939H76.2532V24.9939H86.2532V9.9939H88.7529C90.0029 9.9939 91.2532 11.2431 91.2532 12.4931V27.4931C91.2532 28.7431 90.0029 29.9939 88.7529 29.9939H73.7529C72.5029 29.9939 71.2532 28.7431 71.2532 27.4931V12.4931Z'
					}
					fill={'white'}
				/>
				<path
					d={
						'M62.5081 9.9939H65.0031C66.2531 9.9939 67.5031 11.2431 67.5031 12.4931L67.5081 14.9939H62.5081V9.9939Z'
					}
					fill={'white'}
				/>
				<path
					d={
						'M67.5083 17.5028H62.5083V25.0036H47.5083L47.5032 27.5028C47.5032 28.7528 48.7532 30.0036 50.0032 30.0036H65.0032C66.2532 30.0036 67.5083 28.7528 67.5032 27.5028L67.5083 17.5028Z'
					}
					fill={'white'}
				/>
			</g>
			<defs>
				<clipPath id={'clip0_299_1994'}>
					<rect
						width={'185'}
						height={'40'}
						fill={'white'}
					/>
				</clipPath>
			</defs>
		</svg>
	);

	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					height: '100%',
					width: '100%',
					flexDirection: 'column',
					backgroundColor: 'black',
					paddingTop: '64px',
					background: `url(${backgroundURL})`,
					backgroundSize: 'contain'
				}}>
				{/* Top Section */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-start',
						width: '100%',
						paddingLeft: '80px',
						paddingRight: '80px'
					}}>
					<div
						style={{
							display: 'flex',
							lineHeight: '1.1',
							marginBottom: '40px'
						}}>
						{titleOG}
					</div>
					<div
						style={{
							position: 'absolute',
							top: -40,
							right: 24,
							backgroundColor: '#7C3AED',
							padding: '12px 20px',
							borderRadius: '8px',
							color: 'white',
							display: 'flex',
							flexDirection: 'column'
						}}>
						<p style={{fontSize: '24px', lineHeight: '28px'}}>{'DEFI DEGEN'}</p>
						<p style={{fontSize: '34px', lineHeight: '34px', marginTop: -12}}>{'PROFILE'}</p>
					</div>
				</div>

				{/* Stats Section */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						marginTop: 'auto',
						gap: '20px',
						width: '100%',
						paddingLeft: '80px',
						paddingRight: '80px'
					}}>
					{['$1', '$5,301', '$17.9K', '$1.2M'].map(stat => (
						<div
							key={stat}
							style={{color: 'white', display: 'flex', flexDirection: 'column'}}>
							<div
								style={{
									fontSize: '20px',
									color: '#FFFFFF',
									marginBottom: '16px',
									fontFamily: 'Space Grotesk',
									fontWeight: 600
								}}>
								{'STAT EXAMPLE:'}
							</div>
							<div style={{fontSize: '56px', fontWeight: 700, fontFamily: 'Space Grotesk'}}>{stat}</div>
						</div>
					))}
				</div>

				{/* Bottom Section */}
				<div
					style={{
						marginTop: '40px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						background: `url(${footerBackgroundURL})`,
						backgroundSize: 'cover',
						padding: '20px',
						width: '100%',
						height: '160px'
					}}>
					{wrapButton}
					{jumperLogo}
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Space Grotesk',
					data: boldFontData,
					style: 'normal',
					weight: 700
				},
				{
					name: 'Space Grotesk',
					data: semiBoldFontData,
					style: 'normal',
					weight: 600
				}
			]
		}
	);
}
