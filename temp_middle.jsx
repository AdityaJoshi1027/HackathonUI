          
          {/* Single Large Scrolling Text */}
          <div className="absolute top-20 left-0 w-full overflow-hidden z-20 h-24 flex items-center">
            <motion.div
              className="text-white/90 text-5xl font-bold whitespace-nowrap leading-tight"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
                delay: 0
              }}
            >
              See. Report. Track. Solved. • See. Report. Track. Solved. • See. Report. Track. Solved. •
            </motion.div>
          </div>
