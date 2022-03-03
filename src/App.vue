<template>
<div v-if="vm.isMounted && vm.isLoaded">

    <MainLayout :nft="vm.nft" :settings="vm.settings" :styles="vm.styles" />

    <div class="controls-wrap" :class="{ open: vm.isOpen }">

    <div class="tab" @click="openSidebar"></div>

    <div class="controls-inner">

      <div class="controls settings">
        <label><input type="checkbox" v-model="vm.settings.fullScreenBackground">Full Screen Background</label>
        <label><input type="checkbox" v-model="vm.settings.showSummary">Show Summary</label>
        <label><input type="checkbox" v-model="vm.settings.showOwner">Show Owner</label>
        <label><input type="checkbox" v-model="vm.settings.showMediaPreview">Show Media Preview</label>
        <label>Owner</label>
        <input type="text" v-model="vm.settings.owner">
      </div>

      <div class="controls styles">
        <label>Background Image</label>
        <input type="text" v-model="vm.styles.backgroundImage">

        <label>Background Colour</label>
        <input type="text" v-model="vm.styles.backgroundColor">

        <label>Block Alignment</label>
        <select v-model="vm.styles.blockAlignment">
          <option value="start">left</option>
          <option value="center">center</option>
          <option value="end">right</option>
        </select>

        <label>Block Vertical Alignment</label>
        <select v-model="vm.styles.blockValignment">
          <option value="start">top</option>
          <option value="center">middle</option>
          <option value="end">bottom</option>
        </select>

        <label>Block Width</label>
        <input type="text" v-model="vm.styles.blockWidth">

        <label>Block Padding</label>
        <input type="text" v-model="vm.styles.blockPadding">

        <label>Block Background</label>
        <input type="text" v-model="vm.styles.blockBackground">

        <label>Text Area Padding</label>
        <input type="text" v-model="vm.styles.textAreaMargin">

        <label>Text Alignment</label>
        <select v-model="vm.styles.textAlignment">
          <option>left</option>
          <option>center</option>
          <option>right</option>
        </select>

        <br/><br/>

        <label>Title Family</label>
        <select v-model="vm.styles.titleFont">
          <option v-for="(font, index) in vm.fonts" :value="font" :key="index" >
            {{ font.family }}
          </option>
        </select>

        <label>Title Variant</label>
        <select v-model="vm.styles.titleVariant">
          <option value="100" :disabled="vm.styles.titleFont.variants.indexOf('100') === -1">100</option>
          <option value="200" :disabled="vm.styles.titleFont.variants.indexOf('200') === -1">200</option>
          <option value="300" :disabled="vm.styles.titleFont.variants.indexOf('300') === -1">300</option>
          <option value="regular" :disabled="vm.styles.titleFont.variants.indexOf('regular') === -1">Regular</option>
          <option value="500" :disabled="vm.styles.titleFont.variants.indexOf('500') === -1">500</option>
          <option value="600" :disabled="vm.styles.titleFont.variants.indexOf('600') === -1">600</option>
          <option value="700" :disabled="vm.styles.titleFont.variants.indexOf('700') === -1">700</option>
          <option value="800" :disabled="vm.styles.titleFont.variants.indexOf('700') === -1">800</option>
          <option value="900" :disabled="vm.styles.titleFont.variants.indexOf('900') === -1">900</option>
          <option disabled>──────────</option>
          <option value="100italic" :disabled="vm.styles.titleFont.variants.indexOf('100italic') === -1">100 Italic</option>
          <option value="100italic" :disabled="vm.styles.titleFont.variants.indexOf('100italic') === -1">200 Italic</option>
          <option value="300italic" :disabled="vm.styles.titleFont.variants.indexOf('300italic') === -1">300 Italic</option>
          <option value="italic" :disabled="vm.styles.titleFont.variants.indexOf('italic') === -1">Regular Italic</option>
          <option value="500italic" :disabled="vm.styles.titleFont.variants.indexOf('500italic') === -1">500 Italic</option>
          <option value="600italic" :disabled="vm.styles.titleFont.variants.indexOf('600italic') === -1">600 Italic</option>
          <option value="700italic" :disabled="vm.styles.titleFont.variants.indexOf('700italic') === -1">700 Italic</option>
          <option value="700italic" :disabled="vm.styles.titleFont.variants.indexOf('800italic') === -1">800 Italic</option>
          <option value="900italic" :disabled="vm.styles.titleFont.variants.indexOf('900italic') === -1">900 Italic</option>
        </select>


        <label>Title Size</label>
        <input type="text" v-model="vm.styles.titleSize">

        <label>Title Line Height</label>
        <input type="text" v-model="vm.styles.titleLineHeight">

        <label>Title Colour</label>
        <input type="text" v-model="vm.styles.titleColor">

        <br/><br/>

        <label>Heading Family</label>
        <select v-model="vm.styles.headingFont">
          <option v-for="(font, index) in vm.fonts" :value="font" :key="index" >
            {{ font.family }}
          </option>
        </select>

        <label>Heading Variant</label>
        <select v-model="vm.styles.headingVariant">
          <option value="100" :disabled="vm.styles.headingFont.variants.indexOf('100') === -1">100</option>
          <option value="200" :disabled="vm.styles.headingFont.variants.indexOf('200') === -1">200</option>
          <option value="300" :disabled="vm.styles.headingFont.variants.indexOf('300') === -1">300</option>
          <option value="regular" :disabled="vm.styles.headingFont.variants.indexOf('regular') === -1">Regular</option>
          <option value="500" :disabled="vm.styles.headingFont.variants.indexOf('500') === -1">500</option>
          <option value="600" :disabled="vm.styles.headingFont.variants.indexOf('600') === -1">600</option>
          <option value="700" :disabled="vm.styles.headingFont.variants.indexOf('700') === -1">700</option>
          <option value="800" :disabled="vm.styles.headingFont.variants.indexOf('700') === -1">800</option>
          <option value="900" :disabled="vm.styles.headingFont.variants.indexOf('900') === -1">900</option>
          <option disabled>──────────</option>
          <option value="100italic" :disabled="vm.styles.headingFont.variants.indexOf('100italic') === -1">100 Italic</option>
          <option value="100italic" :disabled="vm.styles.headingFont.variants.indexOf('100italic') === -1">200 Italic</option>
          <option value="300italic" :disabled="vm.styles.headingFont.variants.indexOf('300italic') === -1">300 Italic</option>
          <option value="italic" :disabled="vm.styles.headingFont.variants.indexOf('italic') === -1">Regular Italic</option>
          <option value="500italic" :disabled="vm.styles.headingFont.variants.indexOf('500italic') === -1">500 Italic</option>
          <option value="600italic" :disabled="vm.styles.headingFont.variants.indexOf('600italic') === -1">600 Italic</option>
          <option value="700italic" :disabled="vm.styles.headingFont.variants.indexOf('700italic') === -1">700 Italic</option>
          <option value="700italic" :disabled="vm.styles.headingFont.variants.indexOf('800italic') === -1">800 Italic</option>
          <option value="900italic" :disabled="vm.styles.headingFont.variants.indexOf('900italic') === -1">900 Italic</option>
        </select>    

        <label>Heading Size</label>
        <input type="text" v-model="vm.styles.headingSize">

        <label>Heading Line Height</label>
        <input type="text" v-model="vm.styles.headingLineHeight">

        <label>Heading Colour</label>
        <input type="text" v-model="vm.styles.headingColor">

        <br/><br/>

        <label>Text Family</label>
        <select v-model="vm.styles.textFont">
          <option v-for="(font, index) in vm.fonts" :value="font" :key="index" >
            {{ font.family }}
          </option>
        </select>

        <label>Text Variant</label>
        <select v-model="vm.styles.textVariant">
          <option value="100" :disabled="vm.styles.textFont.variants.indexOf('100') === -1">100</option>
          <option value="200" :disabled="vm.styles.textFont.variants.indexOf('200') === -1">200</option>
          <option value="300" :disabled="vm.styles.textFont.variants.indexOf('300') === -1">300</option>
          <option value="regular" :disabled="vm.styles.textFont.variants.indexOf('regular') === -1">Regular</option>
          <option value="500" :disabled="vm.styles.textFont.variants.indexOf('500') === -1">500</option>
          <option value="600" :disabled="vm.styles.textFont.variants.indexOf('600') === -1">600</option>
          <option value="700" :disabled="vm.styles.textFont.variants.indexOf('700') === -1">700</option>
          <option value="800" :disabled="vm.styles.textFont.variants.indexOf('700') === -1">800</option>
          <option value="900" :disabled="vm.styles.textFont.variants.indexOf('900') === -1">900</option>
          <option disabled>──────────</option>
          <option value="100italic" :disabled="vm.styles.textFont.variants.indexOf('100italic') === -1">100 Italic</option>
          <option value="100italic" :disabled="vm.styles.textFont.variants.indexOf('100italic') === -1">200 Italic</option>
          <option value="300italic" :disabled="vm.styles.textFont.variants.indexOf('300italic') === -1">300 Italic</option>
          <option value="italic" :disabled="vm.styles.textFont.variants.indexOf('italic') === -1">Regular Italic</option>
          <option value="500italic" :disabled="vm.styles.textFont.variants.indexOf('500italic') === -1">500 Italic</option>
          <option value="600italic" :disabled="vm.styles.textFont.variants.indexOf('600italic') === -1">600 Italic</option>
          <option value="700italic" :disabled="vm.styles.textFont.variants.indexOf('700italic') === -1">700 Italic</option>
          <option value="700italic" :disabled="vm.styles.textFont.variants.indexOf('800italic') === -1">800 Italic</option>
          <option value="900italic" :disabled="vm.styles.textFont.variants.indexOf('900italic') === -1">900 Italic</option>
        </select> 

        <label>Text Size</label>
        <input type="text" v-model="vm.styles.textSize">

        <label>Text Line Height</label>
        <input type="text" v-model="vm.styles.textLineHeight">

        <label>Text Colour</label>
        <input type="text" v-model="vm.styles.textColor">

      </div>

    </div>
  </div>
</div>
</template>

<script>
import { onMounted, reactive, watch } from "vue";
import nftJson from "./nft.json";
import infiniftyJson from "./infinifty.json";
import googleFonts from "./googlefonts.json"; // pulled from api the fields items.family and items.variants
import MainLayout from "./MainLayout.vue";
//https://github.com/typekit/webfontloader
import WebFont from "webfontloader";

export default {
    name: "App",
    components: {
      MainLayout
    },
    setup() {

        const vm = reactive({
          nft: nftJson,
          settings: {},
          styles: {},
          isOpen: false,
          fonts: googleFonts.items,
          isMounted: false,
          isLoaded: false
        });

        const params = new URLSearchParams(window.location.search)

        let preset = params.get('preset');

        if(!preset) {
          preset = "1";
        }

        import(`@/presets/preset${preset}.json`).then(presetJson => {

          vm.settings = Object.assign(infiniftyJson.settings, presetJson.settings);
          vm.styles = Object.assign(infiniftyJson.styles, presetJson.styles);

          // set font objects from family in config
          vm.styles.titleFont = vm.fonts.find( ({ family }) => family === vm.styles.titleFamily );
          vm.styles.headingFont = vm.fonts.find( ({ family }) => family === vm.styles.headingFamily );
          vm.styles.textFont = vm.fonts.find( ({ family }) => family === vm.styles.textFamily );

          setRootProperties();
          updateFonts();

          watch(vm.styles, () => {
            setRootProperties();
          });

          // this smells
          // probably a way better way to do this
          // only update the loaded font when needed
          watch(() => vm.styles.titleFamily, () => {
              updateFonts();
          });
          watch(() => vm.styles.titleVariant, () => {
              updateFonts();
          });
          watch(() => vm.styles.headingFamily, () => {
              updateFonts();
          });
          watch(() => vm.styles.headingVariant, () => {
              updateFonts();
          });
          watch(() => vm.styles.textFamily, () => {
              updateFonts();
          });
          watch(() => vm.styles.textVariant, () => {
              updateFonts();
          });

          vm.isLoaded = true;
        });


        const openSidebar = () => {
          vm.isOpen = !vm.isOpen
        }

        const hslaToHsl = (hsla) => {
            const array = hsla.replace(/[hsla{()}]/g, "").split(",");
            return "hsl(" + array[0] + "," + array[1] + "," + array[2] + ")";
        };

        const updateFonts = () => {

          const fonts = [
            { [vm.styles.titleFamily] : vm.styles.titleVariant },
            { [vm.styles.headingFamily] : vm.styles.headingVariant },
            { [vm.styles.textFamily] : vm.styles.textVariant }
          ];

          //console.log('fonts', fonts)

          const grouped = fonts.reduce(function (r, a) {
              const o = Object.entries(a);
              const key = o[0][0];
              r[key] = r[key] || [];
              r[key].push(o[0][1]);
              return r;
          }, Object.create(null));

          //console.log('grouped', grouped)
          
          const fontsToLoad = Object.entries(grouped).map(group => {
            return group[0] + ":" + [...new Set(group[1])].join(',');
          });

          console.log('toload', fontsToLoad)

          WebFont.load({
            google: {
              families: fontsToLoad
            }
          });
        };

        const setRootProperties = () => {

            // set style family from the google font object
            vm.styles.titleFamily = vm.styles.titleFont.family;
            vm.styles.headingFamily = vm.styles.headingFont.family;
            vm.styles.textFamily = vm.styles.textFont.family;

            // set varient if current variant is not in google fonts varient
            if(!vm.styles.titleFont.variants.includes(vm.styles.titleVariant)) {
              vm.styles.titleVariant = vm.styles.titleFont.variants[0];
            }

            if(!vm.styles.headingFont.variants.includes(vm.styles.headingVariant)) {
              vm.styles.headingVariant = vm.styles.headingFont.variants[0];
            }

            if(!vm.styles.textFont.variants.includes(vm.styles.textVariant)) {
              vm.styles.textVariant = vm.styles.textFont.variants[0];
            }

            const root = document.documentElement;
            const hsl = hslaToHsl(vm.styles.backgroundColor);
            root.style.setProperty("--background-overlay-color", vm.styles.backgroundColor);
            root.style.setProperty("--background-color", hsl);
            root.style.setProperty("--block-alignment", vm.styles.blockAlignment);
            root.style.setProperty("--block-valignment", vm.styles.blockValignment);
            root.style.setProperty("--block-width", vm.styles.blockWidth);
            root.style.setProperty("--block-padding", vm.styles.blockPadding);
            root.style.setProperty("--block-background", vm.styles.blockBackground);
            root.style.setProperty("--text-area-margin", vm.styles.textAreaMargin);
            root.style.setProperty("--text-alignment", vm.styles.textAlignment);
            root.style.setProperty("--title-family", `'${vm.styles.titleFamily}'`);

            if (vm.styles.titleVariant.indexOf("italic") !== -1) {
              root.style.setProperty("--title-style", 'italic');
            }
            else {
              root.style.setProperty("--title-style", 'normal');
            }

            let titleWeight = vm.styles.titleVariant.replace("italic", "");

            if (titleWeight === "") {
              titleWeight = "regular";
            }

            root.style.setProperty("--title-weight", titleWeight);
            root.style.setProperty("--title-size", vm.styles.titleSize);
            root.style.setProperty("--title-line-height", vm.styles.titleLineHeight);
            root.style.setProperty("--title-color", vm.styles.titleColor);
            root.style.setProperty("--heading-family", `'${vm.styles.headingFamily}'`);

            
            if (vm.styles.headingVariant.indexOf("italic") !== -1) {
              root.style.setProperty("--heading-style", 'italic');
            }
            else {
              root.style.setProperty("--heading-style", 'normal');
            }

            let headingWeight = vm.styles.headingVariant.replace("italic", "");

            if (headingWeight === "") {
              headingWeight = "regular";
            }

            root.style.setProperty("--heading-weight", headingWeight);
            root.style.setProperty("--heading-size", vm.styles.headingSize);
            root.style.setProperty("--heading-line-height", vm.styles.headingLineHeight);
            root.style.setProperty("--heading-color", vm.styles.headingColor);
            root.style.setProperty("--text-family", `'${vm.styles.textFamily}'`);

            if (vm.styles.textVariant.indexOf("italic") !== -1) {
              root.style.setProperty("--text-style", 'italic');
            }
            else {
              root.style.setProperty("--text-style", 'normal');
            }

            let textWeight = vm.styles.textVariant.replace("italic", "");

            if (textWeight === "") {
              textWeight = "regular";
            }

            root.style.setProperty("--text-weight", textWeight);
            root.style.setProperty("--text-size", vm.styles.textSize);
            root.style.setProperty("--text-line-height", vm.styles.textLineHeight);
            root.style.setProperty("--text-color", vm.styles.textColor);
        };

        onMounted(async () => {
            vm.isMounted = true;
        });

        return {
            vm,
            openSidebar
        };
    }
};
</script>

<style>
.controls-wrap {
  position: fixed;
  top: 0;
  right: 0;
  width: 420px;
  background: rgba(255,255,255,1);
  transform: translateX(100%);
  transition: transform 500ms ease;
  box-sizing: border-box;
}

.controls-wrap.open {
  transform: translateX(0%);
}

.controls-inner {
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 48px 46px;
  box-sizing: border-box;
}

.tab {
  background: white;
  position: absolute;
  top: 48px;
  left: 0;
  transform: translateX(-100%);
  width: 48px;
  height: 48px;
  cursor: pointer;
}

.settings {
  margin-bottom: 32px;
}

label {
  display: block;
}

input[type="text"] {
  width: 100%;
  box-sizing: border-box;
}
</style>