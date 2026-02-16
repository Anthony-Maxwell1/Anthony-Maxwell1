export default function ClockTile() {
  return (
    <div className="flex flex-row p-2 gap-2">
      {/* Logo */}
      <div className="p-3 bg-gray-900 text-gray-100 rounded-lg shadow-md flex items-center justify-center">
        <pre className="text-xs">
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
      <div className="w-full h-full p-4 bg-gray-900 text-gray-100 font-mono rounded-lg shadow-md flex flex-col gap-2 text-sm">
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
      </div>
    </div>
  );
}
