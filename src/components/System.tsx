import { Icon } from "astro-icon/components";
import { computed, signal } from "@preact/signals";

interface Props {
  planets: ({
    colour: string;
    name: string;
  } | null)[];
}

const r = (i: number) => (i == 0 ? 0 : 8) * 2 ** i;

export default function System({ planets }: Props) {
  const zoomLevel = signal(planets.length);
  const viewBox = computed(() => {
    const vb = r(zoomLevel.value);
    return `-${vb} -${vb} ${vb * 2} ${vb * 2}`;
  });

  return (
    <div class="grid grid-rows-8 grid-cols-8 relative">
      <button
        class="col-start-7 col-end-8 row-start-1 border rounded bg-green-400"
        onClick={() => {
          console.log("incremented");
          zoomLevel.value++;
        }}
      >
        Zoom In
      </button>
      <button
        class="col-start-7 col-end-8 row-start-2 border rounded bg-green-400"
        onClick={() => zoomLevel.value--}
      >
        Zoom Out
      </button>
      <svg
        id="display"
        xmlns="http://w3c.org/2000/svg"
        viewBox={viewBox.value}
        class="absolute top-0 left-0 w-full h-full"
      >
        {/* <style>
      text {
        font-size: 4px;
        font-family: "IBM Plex Sans Condensed";
      }
    </style> */}
        <circle cx="0" cy="0" r="4" fill="yellow"></circle>
        {planets.map((planet, index) => (
          <>
            <circle
              cx="0"
              cy="0"
              r={r(index + 1)}
              fill="transparent"
              stroke="black"
              stroke-width="0.2"
            />
            {planet != null ? (
              <>
                <circle cx={0} cy={r(index + 1)} r={2} fill={planet.colour} />
                <text y={r(index + 1) + 1} x={6}>
                  ({index + 1}) {planet.name}
                </text>
              </>
            ) : (
              <text y={r(index + 1) + 1} x={6}>
                ({index + 1})
              </text>
            )}
          </>
        ))}
      </svg>
    </div>
  );
}
