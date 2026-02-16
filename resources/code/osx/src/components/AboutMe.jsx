export default function AboutMe() {
  return (
    <div>
      <div className="flex flex-row p-2 gap-2">
        {/* Logo */}
        <div className="p-3 bg-gray-900 text-gray-100 rounded-lg shadow-md flex items-center justify-center">
          <pre className="text-[15px]">
            {`                  A
                 /#\\
                /###\\
               /#####\\
              /#######\\
             /#########\\
            /###########\\
           /#############\\
          /###############\\
         /#################\\
        /###################\\
       /########*"""*########\\
      /#######/       \\#######\\
     /########         ########\\
    /#########         #########\\
   /##########         ##########\\
  /######***             ***######\\
 /###**                       **###\\
/**                               **\\`}
          </pre>
        </div>

        {/* Info card */}
        <div className="w-full h-full p-4 pb-[10rem] bg-gray-900 text-gray-100 font-mono rounded-lg shadow-md flex flex-col gap-2 text-sm">
          <div className="text-green-400 font-bold">anthony@thatdev</div>
          <div className="flex flex-col flex-wrap gap-1">
            <span>
              <span className="text-gray-400">Name:</span> Anthony Maxwell
            </span>
            <span>
              <span className="text-gray-400">OS:</span> Arch Linux
            </span>
            <span>
              <span className="text-gray-400">PC:</span> $150
            </span>
            <span>
              <span className="text-gray-400">Home Server:</span> $0
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-mono">
              typescript
            </span>
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-mono">
              python
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mt-1">
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-600">
              Knows a lot
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-600">
              Hobbyist
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-600">
              The GOAT
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            <img
              src="https://img.shields.io/badge/github-Anthony--Maxwell1-blue?style=plastic&logo=github"
              alt="Badge"
            />
            <img
              src="https://img.shields.io/badge/discord-itsant__-orange?style=plastic&logo=discord"
              alt="Badge"
            />
            <img
              src="https://img.shields.io/badge/mail me!-anthony@thatdev.org-green?style=plastic&logo=gmail"
              alt="Badge"
            />
            <img
              src="https://img.shields.io/badge/don't call me.-red?style=plastic&logo=android"
              alt="Badge"
            />
            (the above badges are available below to get redirected on click.)
          </div>
        </div>
      </div>
      <div className="ml-2 mr-2 p-3 rounded-lg bg-gray-900 text-gray-100">
        <img
          alt=""
          src="https://skillicons.dev/icons?i=arch,arduino,cs,cloudflare,discord,gcp,git,github,gmail,go,grafana,html,htmx,js,kotlin,lua,md,nextjs,nginx,nodejs,notion,npm,py,raspberrypi,react,replit,ts,unity,robloxstudio,vscode&perline=15"
        />
      </div>
    </div>
  );
}
